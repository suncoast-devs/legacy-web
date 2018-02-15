require 'open-uri'
require 'json'

groups = %w[
  tampa-rb
  suncoast-js
  Front-End-Design
  NodeSchool-St-Petersburg
  Girl-Develop-It-Tampa-Bay
  Tampa-iOS-Meetup
  St-Pete-NET-Meetup
  tampa-nodejs
  TampaUnity3D
  WomenInLinux
  suncoast-developers-guild
  CoderNight
  GeekLunch
  Clearwater-Dunedin-Geek-Breakfast
  GameCreators
  python-178
  Data-Scientists-Tampa-Bay
  Sarasota-Web-Development-Meetup-Group
  Code-Katas
  ReactJS-Tampa-Bay
  Saint-Petersburg-Python-Meetup
  Tampa-Bay-WordPress
  Laravel
  Tampa-Bay-Android-Developers-Group
  Blockchain-Enthusiasts
  Design-St-Pete
  Tampa-JUG
].map do |urlname|
  puts urlname
  open("https://api.meetup.com/#{urlname}?key=#{ENV['MEETUP_API_KEY']}") do |io|
    JSON.parse(io.read)
  end
end

puts "\n\n"

puts groups.to_json
