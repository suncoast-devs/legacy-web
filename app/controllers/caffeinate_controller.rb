class CaffeinateController < ActionController::Metal

  def wake
    self.response_body = 'OK'
  end
end
