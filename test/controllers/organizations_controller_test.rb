require 'test_helper'

class OrganizationsControllerTest < ActionController::TestCase
  include Capybara::DSL

  test "the index page loads" do
    get :index
    assert_response :success
  end

  test "the page lists the organizations" do
    visit organizations_path
    assert page.has_selector?('.organization', count: 2), 'the page should list two organizations'
  end
end
