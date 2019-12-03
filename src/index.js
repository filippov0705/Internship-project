import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { store } from './store/configureStore'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Provider } from 'react-redux'
import MainPage from './containers/MainPage'
import Error404 from './containers/Error404' 

import registerServiceWorker from './registerServiceWorker'

import './index.css'

const routing = (
  <Router>
    <div>
    <Switch>
        <Route exact path="/">
        <Provider store={store}>
        <MainPage />
              </Provider>
        </Route>
        <Route exact path="/procedures">
        <Provider store={store}>
        <MainPage />
              </Provider>
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'))
registerServiceWorker()