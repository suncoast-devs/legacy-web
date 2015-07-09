# Suncoast Developers Guild
## https://suncoast.io

### Our Mission

The Suncoast Developers Guild is a collective of software engineers and programmers in the Tampa Bay Area. Our purpose is to promote a sense of community among local technology organizations and their members. We seek to better communication between leaders, reduce redundant efforts, and to support our members in a way that strengthens our community and promotes the common good.

### Setup

* Copy `.env-sample` to `.env` and setup your dev credentials.
* Make cure you clone submodules, so the COC works:
    git submodule update --init
* Seed the db:
    rake db:create db:setup
