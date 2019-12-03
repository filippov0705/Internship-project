import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './store/configureStore'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Provider } from 'react-redux'
import App from './containers/App'
import Procedures from './containers/Procedures'
import Error404 from './containers/Error404' 

import registerServiceWorker from './registerServiceWorker'

import './index.css'

const routing = (
  <Router>
    <div>
    <Switch>
        <Route exact path="/">
        <Provider store={store}>
        <App />
              </Provider>
        </Route>
        <Route exact path="/procedures">
        <Provider store={store}>
        <Procedures />
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