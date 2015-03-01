class Invitation < ActiveRecord::Base
  validates :given_name, presence: true
  validates :family_name, presence: true
  validates :email_address, presence: true, uniqueness: { case_sensitive: false }, email: true

  after_create :invite_to_slack!

  def invite_to_slack!
    request = Slack.invite(email_address, given_name, family_name)
    update_attribute(:invited_at, Time.now) if request.successful?
  end
end
