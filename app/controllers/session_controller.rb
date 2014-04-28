class SessionController < ApplicationController
	def new
		
	end
	
	def destroy
    sign_out
    redirect_to root_url
  end
end