class HomeController < ApplicationController
  protect_from_forgery except: :lookerbook

  def index
  end

  def lookerbook
  end
end
