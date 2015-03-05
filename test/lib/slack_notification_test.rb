require 'test_helper'

class SlackNotificationTest < ActiveSupport::TestCase

  def setup
    SlackNotification.stubs(:webhook_url).returns('http://example.com/webhook')
  end

  test "contact can generate a slack payload for a webhook" do
    notification = SlackNotification.new(text: 'This is the message').payload
    assert_equal notification.fetch(:username), 'Suncoast.io Bot'
    assert_equal notification.fetch(:icon_emoji), ':rooster:'
    assert_equal notification.fetch(:text), 'This is the message'
  end

  test "it is successful if the API returns ok" do
    stub_request(:post, SlackNotification.webhook_url)
      .to_return(body: 'ok')

    assert SlackNotification.deliver(text: 'This is a sample message').successful?
  end
end
