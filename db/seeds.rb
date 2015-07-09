# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# `Organization.pluck(:name, :meetup_id, :color).to_json` to get this from Production.

[
  ['Tampa Ruby Brigade',     'tampa-rb',     '#860D17'],
  ['Geek Lunch',             'geeklunch',    '#78B9E0'],
  ['Coder Night',            'CoderNight',   '#B5403D'],
  ['Suncoast Game Creators', 'GameCreators', '#83C3A0'],
  ['Suncoast.js',            'suncoast-js',  '#FFBE09']
].each do |org|
  Organization.create Hash[%w(name meetup_id color).zip(org)]
end
