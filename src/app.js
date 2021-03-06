import React from 'react'
import { render } from 'react-dom'
import { Route, Switch, BrowserRouter, browserHistory } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './components/Home'
import Topics from './components/Topics'
import NotFound from './components/NotFound'

import store from './store'

import './app.scss'

render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <div id='content-wrapper'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/topics' component={Topics} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#main')
)
