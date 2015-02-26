class Invitation < ActiveRecord::Base
  validates :given_name, presence: true
  validates :family_name, presence: true
  validates :email_address, presence: true, uniqueness: { case_sensitive: false }, email: true

  SLACK_API_ENPOINT = "https://slack.com/api/users.admin.invite"

  after_create :invite_to_slack!

  def invite_to_slack!
    options = {
      email: email_address,
      first_name: given_name,
      last_name: family_name,
      token: ENV["SLACK_API_TOKEN"],
      set_active: true,
      _attempts: 1
    }
    uri = URI.parse([SLACK_API_ENPOINT, options.to_query].join("?"))
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    request = Net::HTTP::Get.new(uri.request_uri)
    response = (http.request(request))
    update_attribute(:invited_at, Time.now) if ActiveSupport::JSON.decode(response.body)["ok"]
  end
end
