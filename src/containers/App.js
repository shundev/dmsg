import 'babel-polyfill'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { store } from '../store'
import * as actionTypes from '../constants/actionTypes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, dApps!</h1>
      </div>
    );
  }
}

export default connect(
    state => state,
)(App);
