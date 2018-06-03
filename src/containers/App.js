import 'babel-polyfill'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import ChangeFriend from '../components/ChangeFriend'
import ChatHistory from '../components/ChatHistory'
import ChatInput from '../components/ChatInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChangeFriend />
        <ChatHistory />
        <ChatInput />
      </div>
    );
  }
}

export default connect(
    state => state,
)(App);
