import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Stickers from './Stickers'
import Conduct from './Conduct'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/stickers" component={Stickers} />
          <Route exact path="/conduct" component={Conduct} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
