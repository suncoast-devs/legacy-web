namespace :caffeinate do
  desc 'Wake the app between the hours of 8 AM and 1 AM.'
  task :wake do
    Time.use_zone 'Eastern Time (US & Canada)' do
      unless Time.zone.now.hour.between?(1, 8)
        system "curl --silent #{ENV['WAKE_URL'] || 'http://localhost:3000/wake'}"
      end
    end
  end
end
