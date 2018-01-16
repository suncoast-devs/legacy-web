import React, { Component } from 'react'
import Meetup from './Meetup'
import orgs from '../orgs.json'

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
              href="https://suncoast-devs.slack.com/join/shared_invite/enQtMjk4NjQ3MTkxNzYwLTZjODYzNGM0MTI3NjYxZWRlYWZkZTUxNDI0YzA0Yjk1NTlkNTQ4ZjlmMWVkOGQyNmY5YjFkNmE1ODQ0Y2RmNzA"
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
              {orgs
                .sort((a, b) => a.created - b.created)
                .map(org => <Meetup group={org} />)}
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
