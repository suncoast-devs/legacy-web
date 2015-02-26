class InvitationsController < ApplicationController

  # POST /invitations
  def create
    @invitation = Invitation.new(invitation_params)

    if @invitation.save
      redirect_to root_path, notice: "Thanks, #{@invitation.given_name}, you should receive an email shortly inviting you to join us."
    else
      redirect_to root_path, alert: "Invitation was not created: #{@invitation.errors.full_messages.to_sentence.downcase}."
    end
  end

  private

  def invitation_params
    params.require(:invitation).permit(:given_name, :family_name, :email_address)
  end
end
