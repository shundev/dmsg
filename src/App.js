import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ChatInput from './ChatInput'
import ChatHistory from './ChatHistory'
import ChangeFriend from './ChangeFriend'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

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

export default App
