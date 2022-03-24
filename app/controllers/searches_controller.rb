class SearchesController < ApplicationController
  def home
    @json = params[:json] if params[:json].present?

    respond_to do |format|
      format.html
      format.text { render partial: 'searches/latlong', locals: { json: @json }, formats: [:html] }
    end
  end
end
