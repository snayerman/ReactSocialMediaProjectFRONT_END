import 'babel-polyfill'

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, Redirect} from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import model from './model'
import rootSaga from './sagas'
import {clearError} from './controller'

import './styles/main.css'

import App from './views/App'
import Home from './views/Home'
import Settings from './views/Settings'
import Login from './views/Login'
import Register from './views/Register'
import Dashboard from './views/Dashboard'
import NotFound from './views/NotFound'
import FriendProfile from './views/FriendProfile'

const logger = createLogger({
  // Ignore `CHANGE_FORM` actions in the logger, since they fire after every keystroke
  predicate: (getState, action) => action.type !== 'CHANGE_FORM'
})

// const sagaMiddleware = createSagaMiddleware()

const store = createStore(model, applyMiddleware(logger/* , sagaMiddleware */))
// sagaMiddleware.run(rootSaga)

/* function checkAuth (nextState, replace) {
  const {loggedIn} = store.getState()

  store.dispatch(clearError())

  if (nextState.location.pathname === '/login' || nextState.location.pathname === '/register') {
    if (loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname)
      } else {
        replace('/')
      }
    }
  } else {
    if (!loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname)
      } else {
        replace('/')
      }
    }
  }
} */

class LoginFlow extends Component {

   isLoggedIn() {
      console.log("Is logged in?", localStorage.getItem("token") !== null);
      return localStorage.getItem("token") !== null;
   }

   render () {
      console.log("Props", this);
      return (
         <Provider store={store}>
            <Router history={browserHistory}>
               <Route component={App}>
                  <Route exact path='/' component={Home} />
                  {/* <Route onEnter={checkAuth}> */}
                  <Route path='/login' component={Login} />
                  <Route path='/register' component={Register} />
                  <Route path='/dashboard' component={Dashboard} />
                  <Route path='/settings' component={Settings} />
                  <Route path='/friends' component={FriendProfile} />
                  </Route>
                  <Route path='*' component={NotFound} />
               {/* </Route> */}
            </Router>
         </Provider>
      )
   }
}

ReactDOM.render(<LoginFlow />, document.getElementById('app'))
