import 'babel-polyfill'
import { Component } from 'react'
import { connect } from 'react-redux'

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
