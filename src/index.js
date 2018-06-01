import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { DrizzleProvider } from 'drizzle-react'

import drizzleOptions from './drizzleOptions'
import { store, sagaMiddleware } from './store'
import App from './containers/App';

ReactDOM.render(
  <DrizzleProvider options={ drizzleOptions } >
      <Provider store={ store }>
          <App />
      </Provider>
  </DrizzleProvider>,
  document.getElementById('root')
);
