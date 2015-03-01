require 'test_helper'

class MeetupControllerTest < ActionController::TestCase
  test "it can fetch the data for the specific meetup" do
    get :group, id: 'tampa-rb'
    assert_response :success
  end

  test "hit hits the Meetup API and returns the group JSON" do
    Meetup.stubs(:group).returns JSON.parse(File.read('test/fixtures/successful_meetup_response.json'))
    get :group, id: 'tampa-rb'
    json = JSON.parse(response.body)
    assert json.has_key?('name'), 'the response should be meetup json'
  end
end
