class ContactsController < ApplicationController
  def show
  end

  def create
    notification = SlackNotification.deliver({
      attachments: [{
        fallback: "New message from contact form:",
        pretext: "New message from contact form:",
        color: 'success',
        fields: [{
          title: "#{params[:name]} <#{params[:email]}>",
          value: params[:message],
          short: false
        }]
      }]
    })

    if notification.successful?
      redirect_to root_path, notice: "Thanks for getting in touch, we can't wait to hear from you!"
    else
      redirect_to contact_path, alert: 'Oh no! An error has occured. Please try again.'
    end
  end
end
