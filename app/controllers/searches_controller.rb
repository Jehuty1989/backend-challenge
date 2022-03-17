class SearchesController < ApplicationController
  def home
    @search = Search.new
  end

  def latlong
  end
end
