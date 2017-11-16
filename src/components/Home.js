import React, { Component } from 'react'

const images = {
  slack: require('../images/slack.svg'),
  logo: require('../images/logo.svg'),
  junior: require('../images/SDGJR.svg')
}

class Home extends Component {
  render() {
    return (
      <div className="app">
        <main>
          <header>
            <h1>Suncoast Developers Guild</h1>
            <a
              className="invite-o-matic"
              href="https://suncoast-devs.now.sh/"
              title="The Invite-o-matic!"
            >
              <img src={images.slack} alt="Join us on Slack" width={240} />
            </a>
          </header>

          <section className="mission">
            <h2>
              We are a collective of software engineers, programmers, and
              designers in the Tampa Bay Area.
            </h2>
            <p>
              Our purpose is to promote a sense of community among local
              technology organizations and their members. We seek to better
              communication between leaders, centralize efforts, improve
              culture, and to support our members in a way that strengthens our
              community and promotes the common good.
            </p>
          </section>

          <section className="logo">
            <img
              src={images.logo}
              alt="Suncoast Developers Guild Logo"
              width="320"
            />
          </section>

          <section className="conduct">
            <h3>
              Read our <a href="./conduct">Code of Conduct</a>.
            </h3>
          </section>

          <section className="organizations">
            <h2>Our Member Organizations</h2>

            <ul>
              <li className="org">
                <img
                  src="https://photos1.meetupstatic.com/photos/event/1/8/4/a/thumb_440826218.jpeg"
                  alt="The Tampa Ruby Brigade"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/tampa-rb/">
                      The Tampa Ruby Brigade
                    </a>
                  </h3>
                  <p>nearly 740 Rubyists</p>
                </div>
              </li>
              <li className="org">
                <img
                  src="https://photos1.meetupstatic.com/photos/event/d/8/e/2/thumb_185755522.jpeg"
                  alt="Suncoast.js"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/suncoast-js/">
                      Suncoast.js
                    </a>
                  </h3>
                  <p>in the ballpark of 620 JavaScript Developers</p>
                </div>
              </li>
              <li className="org">
                <img
                  src="https://photos4.meetupstatic.com/photos/event/d/d/b/e/thumb_16616766.jpeg"
                  alt="Front-End Design Meetup"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/Front-End-Design/">
                      Front-End Design Meetup
                    </a>
                  </h3>
                  <p>on the brink of 980 Front-Enders</p>
                </div>
              </li>
              <li className="org">
                <img
                  src="https://photos1.meetupstatic.com/photos/event/a/9/f/2/thumb_448123506.jpeg"
                  alt="NodeSchool St. Petersburg"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/NodeSchool-St-Petersburg/">
                      NodeSchool St. Petersburg
                    </a>
                  </h3>
                  <p>approximately 200 NodeSchoolers</p>
                </div>
              </li>
              <li className="org">
                <img
                  src="https://photos2.meetupstatic.com/photos/event/4/1/9/4/thumb_431476788.jpeg"
                  alt="The Iron Yard - Tampa Bay"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/The-Iron-Yard-Tampa-Bay/">
                      The Iron Yard - Tampa Bay
                    </a>
                  </h3>
                  <p>on the edge of 1580 Members</p>
                </div>
              </li>
              <li className="org">
                <img
                  src="https://photos4.meetupstatic.com/photos/event/8/7/a/c/thumb_436114732.jpeg"
                  alt="Girl Develop It Tampa Bay"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/Girl-Develop-It-Tampa-Bay/">
                      Girl Develop It Tampa Bay
                    </a>
                  </h3>
                  <p>not far from 600 Nerdettes</p>
                </div>
              </li>
              <li className="org">
                <img
                  src="https://photos2.meetupstatic.com/photos/event/3/a/a/9/thumb_443175017.jpeg"
                  alt="Tampa iOS Meetup"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/Tampa-iOS-Meetup/">
                      Tampa iOS Meetup
                    </a>
                  </h3>
                  <p>relatively 240 iOS Developers</p>
                </div>
              </li>
              <li className="org">
                <img
                  src="https://photos1.meetupstatic.com/photos/event/1/e/5/3/thumb_445147763.jpeg"
                  alt="St Pete .NET Meetup"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/St-Pete-NET-Meetup/">
                      St Pete .NET Meetup
                    </a>
                  </h3>
                  <p>on the point of 420 Members</p>
                </div>
              </li>
              <li className="org">
                <img
                  src="https://photos2.meetupstatic.com/photos/event/6/5/e/c/thumb_402806092.jpeg"
                  alt="Tampa NodeJS"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/tampa-nodejs/">
                      Tampa NodeJS
                    </a>
                  </h3>
                  <p>practically 620 Noders</p>
                </div>
              </li>
              <li className="org">
                <img
                  src="https://photos2.meetupstatic.com/photos/event/a/6/8/c/thumb_440922636.jpeg"
                  alt="Clearwater / St Petersburg Unity User Group"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/TampaUnity3D/">
                      Clearwater / St Petersburg Unity User Group
                    </a>
                  </h3>
                  <p>virtually 160 Game Makers</p>
                </div>
              </li>
              <li className="org">
                <img src="" alt="Women In Linux" />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/WomenInLinux/">
                      Women In Linux
                    </a>
                  </h3>
                  <p>roughtimating around 220 Members</p>
                </div>
              </li>

              <li className="org">
                <img
                  src="https://photos1.meetupstatic.com/photos/event/7/9/9/f/thumb_441811135.jpeg"
                  alt="The Suncoast Developers Guild"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/suncoast-devs/">
                      The Suncoast Developers Guild
                    </a>
                  </h3>
                  <p>generally about 280 Developers</p>
                </div>
              </li>
              <li className="org">
                <img
                  src="https://photos1.meetupstatic.com/photos/event/c/0/thumb_441180192.jpeg"
                  alt="CoderNight"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/CoderNight/">CoderNight</a>
                  </h3>
                  <p>pretty near 280 Developers</p>
                </div>
              </li>
              <li className="org">
                <img
                  src="https://photos1.meetupstatic.com/photos/event/a/3/a/4/thumb_97841892.jpeg"
                  alt="Geek Lunch"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/GeekLunch/">Geek Lunch</a>
                  </h3>
                  <p>not quite 160 Geeks</p>
                </div>
              </li>
              <li className="org">
                <img
                  src="https://photos4.meetupstatic.com/photos/event/2/6/1/e/thumb_435309758.jpeg"
                  alt="Clearwater/Dunedin Geek Breakfast"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/Clearwater-Dunedin-Geek-Breakfast/">
                      Clearwater/Dunedin Geek Breakfast
                    </a>
                  </h3>
                  <p>within sight of 340 Geeks</p>
                </div>
              </li>
              <li className="org">
                <img
                  src="https://photos2.meetupstatic.com/photos/event/5/b/9/1/thumb_437183441.jpeg"
                  alt="Suncoast Game Creators"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/GameCreators/">
                      Suncoast Game Creators
                    </a>
                  </h3>
                  <p>just about 80 Game Creators</p>
                </div>
              </li>
              <li className="org">
                <img
                  src="https://photos4.meetupstatic.com/photos/event/7/3/3/e/thumb_85169502.jpeg"
                  alt="The Tampa Bay Python Meetup Group"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/python-178/">
                      The Tampa Bay Python Meetup Group
                    </a>
                  </h3>
                  <p>upwards of 460 Python Programmers</p>
                </div>
              </li>
              <li className="org">
                <img
                  src="https://photos3.meetupstatic.com/photos/event/2/9/8/a/thumb_449890634.jpeg"
                  alt="Tampa Bay Data Science Group"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/Data-Scientists-Tampa-Bay/">
                      Tampa Bay Data Science Group
                    </a>
                  </h3>
                  <p>close to 340 Data Scientists</p>
                </div>
              </li>
              <li className="org">
                <img
                  src="https://photos1.meetupstatic.com/photos/event/1/7/9/1/thumb_20106033.jpeg"
                  alt="Sarasota Web Development Meetup Group"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/Sarasota-Web-Development-Meetup-Group/">
                      Sarasota Web Development Meetup Group
                    </a>
                  </h3>
                  <p>nigh 340 Geeks</p>
                </div>
              </li>
              <li className="org">
                <img
                  src="https://photos2.meetupstatic.com/photos/event/5/f/8/e/thumb_453024462.jpeg"
                  alt="Code Katas"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/Code-Katas/">Code Katas</a>
                  </h3>
                  <p>more or less 80 Code Ninjas</p>
                </div>
              </li>
              <li className="org">
                <img
                  src="https://photos2.meetupstatic.com/photos/event/c/7/6/6/thumb_449391046.jpeg"
                  alt="ReactJS Tampa Bay"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/ReactJS-Tampa-Bay/">
                      ReactJS Tampa Bay
                    </a>
                  </h3>
                  <p>in the vicinity of 240 Reactors</p>
                </div>
              </li>
              <li className="org">
                <img
                  src="https://photos1.meetupstatic.com/photos/event/5/2/f/3/thumb_454161235.jpeg"
                  alt="PyStPete"
                />
                <div className="info">
                  <h3>
                    <a href="https://www.meetup.com/Saint-Petersburg-Python-Meetup/">
                      PyStPete
                    </a>
                  </h3>
                  <p>on the verge of 80 Members</p>
                </div>
              </li>
              <li className="org">
                <img src={images.junior} alt="Suncoast Developers Guild Jr" />
                <div className="info">
                  <h3>
                    <a href="mailto:suncoast.developers@gmail.com">
                      Suncoast Developers Guild Jr
                    </a>
                  </h3>
                  <p>teaching junior developers</p>
                </div>
              </li>
            </ul>
          </section>
        </main>
        <footer>
          <div className="join">
            <p>
              If you&rsquo;re a leader of a tech organization, and are
              interested in being a part of the Suncoast Developers Guild,
              contact
              <strong>
                {' '}
                <a href="https://ambethia.com">@ambethia</a>{' '}
              </strong>
              in our{' '}
              <a href="https://suncoast-devs.slack.com">
                <i className="fa fa-slack" />
              </a>{' '}
              or on{' '}
              <a href="https://twitter.com/ambethia">
                <i className="fa fa-twitter" />
              </a>.
            </p>

            <p className="stickers-link">
              <a href="./stickers">
                Get Stickers! <i className="fa fa-file-code-o" />
              </a>
            </p>
          </div>

          <div className="copywrite">
            &copy; 2017 Suncoast Developers Guild
            <i className="fa fa-meetup" />
          </div>
        </footer>
      </div>
    )
  }
}

export default Home
