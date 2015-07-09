// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require semantic_ui/semantic_ui
//= require react
//= require react_ujs
//= require_tree .

$(document).on('ready', function() {
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });

  $('.ui.modal.invitation').modal({
    // inverted: true
  }).modal('attach events', '.masthead .primary.button', 'show');

  $('.invitation .ok.button').on('click', function(e) {
    $('.invitation form').submit();
  });
});
