import React from 'react'
import PropTypes from 'prop-types'

import './ChatHistory.styl'

export default class ChatHistory extends React.Component {
  render() {
    const imgURL = "//robohash.org/" + "0x777" + "?set=set2&bgset=bg2&size=70x70";
	const msgObj = {
	  Id: 1,
	  Who: "0xFFF",
	  What: "Hello, world!!",
	  When: 10000000000000
    }

    const messageDate = new Date(msgObj.When * 1000);
    const messageDateTime = messageDate.toLocaleDateString() + ' at ' + messageDate.toLocaleTimeString();

    return (
      <ul className="collection">
            <li className="collection-item avatar" key={ msgObj.Id }>
              <img src={ imgURL } alt="{ msgObj.Who }" className="circle" />
              <span className="title">From { msgObj.Who }</span>
              <p>
                <i className="prefix tiny material-icons">alarm</i>
                <span className="message-date">{ messageDateTime }</span>
                <br />
                <span>{ msgObj.What }</span>
              </p>
            </li>
      </ul>
    )
  }
}

