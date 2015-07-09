# Use Slack's undocumented admin API to creat invitations.
class SlackInvitation
  include HTTParty
  base_uri 'https://slack.com/api'

  def self.token
    ENV['SLACK_API_TOKEN']
  end

  def self.deliver(*args)
    new(*args).tap(&:request)
  end

  def initialize(email_address, given_name, family_name)
    @email_address = email_address
    @given_name = given_name
    @family_name = family_name
  end

  def uri
    ['/users.admin.invite', query].join('?')
  end

  def request
    @request ||= self.class.get(uri, verify: false)
  end

  def successful?
    request.parsed_response['ok']
  end

  def query
    {
      email: @email_address,
      first_name: @given_name,
      last_name: @family_name,
      token: self.class.token,
      set_active: true
    }.to_query
  end
end
