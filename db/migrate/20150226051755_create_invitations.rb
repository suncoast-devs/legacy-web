class CreateInvitations < ActiveRecord::Migration
  def change
    create_table :invitations do |t|
      t.string :given_name
      t.string :family_name
      t.string :email_address
      t.timestamp :invited_at

      t.timestamps null: false
    end
    add_index :invitations, :email_address, unique: true
  end
end
