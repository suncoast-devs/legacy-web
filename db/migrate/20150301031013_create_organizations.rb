class CreateOrganizations < ActiveRecord::Migration
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :meetup_id
      t.string :color
      t.timestamps
    end

    Organization.create(name: 'Tampa Ruby Brigate', meetup_id: 'tampa-rb', color: '#860D17')
    Organization.create(name: 'Suncoast.js', meetup_id: 'suncoast-js', color: '#FFE00A')
  end
end
