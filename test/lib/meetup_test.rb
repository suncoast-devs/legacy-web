require 'test_helper'

class MeetupTest < ActiveSupport::TestCase
  test "it sets the base URI to the meetup api" do
    assert_includes Meetup.base_uri, 'api.meetup.com', %Q{the base URI should be set, it was "#{Meetup.base_uri}"}
  end

  test "it can generate a url and also apply the correct auth params" do
    url = Meetup.path_for('tampa-rb')
    assert_includes url, "sign=true"
    assert_includes url, "key=#{Meetup.token}"
  end
end
