import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import rootReducer from '../reducers'

// Sync dispatched route actions to the history
export const reduxRouterMiddleware = routerMiddleware(browserHistory)

const loggerMiddleware = createLogger()

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
    	applyMiddleware(
	      thunkMiddleware,
	      reduxRouterMiddleware
	      //loggerMiddleware
	    ),
	    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}