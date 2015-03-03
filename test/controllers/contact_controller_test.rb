require 'test_helper'

class ContactControllerTest < ActionController::TestCase
  include Capybara::DSL

  def submit_contact_form!
    visit '/contact'
    fill_in "Name", with: "Test Name"
    fill_in "Message", with: "This is a message"
    click_button "Send"
  end

  test "it can submit the form and the result is sent to slack" do
    stub_request(:post, SlackNotification.webhook_url).to_return(body: 'ok')
    submit_contact_form!
    assert page.has_content?('Thanks for getting in touch')
  end

  test "on failure it will notify the user of a problem" do
    stub_request(:post, SlackNotification.webhook_url).to_return(body: '500 bad request')
    submit_contact_form!
    assert page.has_content?('An error has occured')
  end
end
