import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { DrizzleProvider } from 'drizzle-react'

import drizzleOptions from './drizzleOptions'
import { store } from './store'
import App from './containers/App';

ReactDOM.render(
  <DrizzleProvider options={ drizzleOptions } store={ store }>
      <App />
  </DrizzleProvider>,
  document.getElementById('root')
);
