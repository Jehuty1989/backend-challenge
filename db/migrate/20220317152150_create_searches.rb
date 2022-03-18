class CreateSearches < ActiveRecord::Migration[6.1]
  def change
    create_table :searches do |t|
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
