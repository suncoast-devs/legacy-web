class MeetupController < ApplicationController
  def group
    render json: Meetup.group(params[:id])
  end
end
