class AddRadiusToSearch < ActiveRecord::Migration[6.1]
  def change
    add_column :searches, :radius, :integer
  end
end
