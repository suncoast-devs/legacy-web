class ContactsController < ApplicationController
  def show
  end

  def create
    notification = SlackNotification.deliver({
      text: "Contact from *#{params[:name]}*: #{params[:message]}"
    })

    if notification.successful?
      redirect_to root_path, notice: "Thanks for getting in touch, we can't wait to hear from you!"
    else
      redirect_to contact_path, alert: 'Oh no! An error has occured. Please try again.'
    end
  end
end
