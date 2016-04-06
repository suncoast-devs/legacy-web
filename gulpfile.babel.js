import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import lazypipe from 'lazypipe';
import marked from 'marked';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('styles', () =>
  gulp.src('app/styles/*.css')
    .pipe($.plumber({
      errorHandler(error) {
        $.util.beep();
        $.util.log(error.message);
        this.emit('end');
      },
    }))
    .pipe($.postcss([
      require('postcss-normalize'),
      require('postcss-cssnext'),
    ]))
    .pipe(gulp.dest('dist/styles'))
    .pipe(reload({ stream: true }))
);

gulp.task('scripts', () =>
  gulp.src('app/scripts/*.js')
    .pipe($.plumber())
    .pipe($.babel({
      presets: ['es2015', 'stage-0'],
    }))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(reload({ stream: true }))
);

gulp.task('eslint', () =>
  gulp.src('app/scripts/**/*.js')
    .pipe(reload({ stream: true, once: true }))
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failAfterError()))
);

gulp.task('stylint', () =>
  gulp.src('app/styles/**/*.css')
    .pipe(reload({ stream: true, once: true }))
    .pipe($.stylint())
    .pipe($.stylint.reporter())
    .pipe($.if(!browserSync.active, $.stylint.reporter('fail')))
);

gulp.task('lint', ['eslint', 'stylint']);

gulp.task('html', ['styles', 'scripts'], () =>
  gulp.src('app/**/*.html')
    .pipe($.plumber())
    .pipe($.useref({ searchPath: ['dist', 'app', '.'] },
      lazypipe().pipe($.sourcemaps.init, { loadMaps: true })))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.cssnano()))
    .pipe($.sourcemaps.write('maps'))
    .pipe($.fileInclude({ filters: { markdown: marked } }))
    .pipe($.if('*.html', $.htmlmin({ collapseWhitespace: true })))
    .pipe(gulp.dest('dist'))
);

gulp.task('images', () =>
  gulp.src('app/images/**/*')
    .pipe($.plumber())
    .pipe($.if($.if.isFile, $.cache($.imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{ cleanupIDs: false }],
    }))
    .on('error', (err) => {
      $.util.log(err);
      this.end();
    })))
    .pipe(gulp.dest('dist/images'))
);

gulp.task('extras', () =>
  gulp.src([
    'app/CNAME',
    'app/*.*',
    '!app/*.html',
  ], {
    dot: true,
  }).pipe(gulp.dest('dist'))
);

gulp.task('clean', del.bind(null, ['dist']));

gulp.task('serve', ['styles', 'scripts', 'html'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist', 'app'],
    },
  });

  gulp.watch([
    'app/**/*.html',
    'app/images/**/*',
  ]).on('change', reload);

  gulp.watch('app/**/*.html', ['html']);
  gulp.watch('app/scripts/**/*.js', ['scripts']);
  gulp.watch('app/styles/**/*.css', ['styles']);
});

gulp.task('build', ['lint', 'html', 'images', 'extras'], () =>
  gulp.src('dist/**/*')
    .pipe($.size({ title: 'build', gzip: true }))
);

gulp.task('deploy', ['build'], () => gulp.src('./dist/**/*').pipe($.ghPages()));
gulp.task('default', ['clean'], () => gulp.start('serve'));
