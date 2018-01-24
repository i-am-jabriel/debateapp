import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes'

// establishes socket connection
import './socket'

alert(1);

ReactDOM.render(
    <Provider store={store}>
      <Routes />
      Hi    
    </Provider>,
  document.getElementById('app')
)

console.log('hello');