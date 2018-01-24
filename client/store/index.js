import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//const reducer = combineReducers({ allProducts, singleProduct, categories, currentUser, reviews, orders, activeOrder })
const reducer = combineReducers({});

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
))
const store = createStore(reducer, middleware)

export default store