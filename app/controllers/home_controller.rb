class HomeController < ApplicationController

  def index
    @organizations = Organization.all
  end

  def conduct
  end
end
