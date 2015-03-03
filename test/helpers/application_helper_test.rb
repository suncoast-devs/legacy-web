require 'test_helper'

class ApplicationHelpersTest < ActionView::TestCase
  include ApplicationHelper

  attr_reader :request

  test "it can generate a navigation link" do
    link = navigation_link('Home', '/')
    assert_includes link, '<li>'
    assert_includes link, '<a href="/">Home</a>'
  end

  test "the link is active if the current path is the same" do
    request.path = '/contact'
    link = navigation_link('Contact', '/contact')
    assert_includes link, '<li class="active">'
  end
end
