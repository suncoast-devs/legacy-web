require 'open-uri'
require 'json'

UPTO = 20 # round member count up to

estimates = [
  "bordering on", "close to", "generally about", "in the ballpark of", "just about", "more or less",
  "approximately", "roughtimating around", "upwards of", "in the vicinity of", "nearly", "nigh", "not far from", "not quite",
  "on the brink of", "on the edge of", "on the point of", "on the verge of", "practically", "pretty near", "relatively",
  "virtually", "within sight of"
].shuffle!

%w[
  tampa-rb
  suncoast-js
  Front-End-Design
  NodeSchool-St-Petersburg
  The-Iron-Yard-Tampa-Bay
  Girl-Develop-It-Tampa-Bay
  Tampa-iOS-Meetup
  St-Pete-NET-Meetup
  suncoast-devs
  CoderNight
  GeekLunch
  GameCreators
].each do |urlname|
  open("https://api.meetup.com/#{urlname}?key=#{ENV['MEETUP_API_KEY']}") do |io|
    group = JSON.parse(io.read)
    members = ((group['members'].to_f / UPTO).ceil) * UPTO
    puts <<-EOF
          <li class="org">
            <img src="#{group['group_photo']['thumb_link']}" alt="#{group['name']} Image"/>
            <div class="info">
              <h3><a href="#{group['url']}">#{group['name']}</a></h3>
              <p>#{estimates.pop} #{members} #{group['who']}</p>
            </div>
          </li>
    EOF
    STDOUT.flush
  end
end
