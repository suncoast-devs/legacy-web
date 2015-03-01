class OrganizationsController < ApplicationController
  def index
    @organizations = [
      OpenStruct.new(name: 'Tampa Ruby Brigate', meetup_id: 'tampa-rb', color: '#860D17'),
      OpenStruct.new(name: 'Suncoast.js', meetup_id: 'suncoast-js', color: '#FFE00A')
    ]
  end
end
