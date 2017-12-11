import React, { Component } from 'react'
import marked from 'marked'
import codeOfConduct from '../code-of-conduct.md'

class Conduct extends Component {
  state = {
    content: 'Loading...'
  }

  componentDidMount() {
    window
      .fetch(codeOfConduct)
      .then(r => r.text())
      .then(text => {
        this.setState({
          content: marked(text)
        })
      })
  }

  render() {
    return (
      <div>
        <main>
          <header onClick={() => this.props.history.push('/')}>
            <h1>Suncoast Developers Guild</h1>
          </header>

          <section>
            <article
              className="code-of-conduct"
              dangerouslySetInnerHTML={{ __html: this.state.content }}
            />
          </section>
        </main>
        <footer>
          <div className="copywrite">
            &copy; 2017 Suncoast Developers Guild
            <i className="fa fa-meetup" />
          </div>
        </footer>
      </div>
    )
  }
}

export default Conduct
