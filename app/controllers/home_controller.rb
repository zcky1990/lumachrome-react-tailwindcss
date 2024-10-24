class HomeController < ApplicationController
  def index
    render inertia: 'Hello', props: {
      name: 'test'
    }
  end

  def apa
    render inertia: 'SignIn', props: {
      name: 'apa'
    }
  end
end
