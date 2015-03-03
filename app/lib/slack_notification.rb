class SlackNotification

  def self.webhook_url
    ENV['SLACK_CONTACT_WEBHOOK_URL']
  end

  def self.deliver(*args)
    new(*args).tap(&:request)
  end

  def initialize(notification_options)
    @notification_options = notification_options
  end

  def payload
    { username: 'Suncoast.io Bot', icon_emoji: ':rooster:' }.merge(@notification_options)
  end

  def request
    @request ||= HTTParty.post(self.class.webhook_url, body: payload.to_json)
  end

  def successful?
    request.parsed_response == "ok"
  end
end
