class AddColsToOrganizations < ActiveRecord::Migration
  def change
    add_column :organizations, :photo_url, :string
    add_column :organizations, :next_event, :string
    add_column :organizations, :members, :string
    add_column :organizations, :description, :text
  end
end
