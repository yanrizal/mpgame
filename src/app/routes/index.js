import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import configureStore from '../store/configureStore';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Dashboard from '../containers/dashboard';
import MainDashboard from '../containers/dashboard/containers/main';
import DashboardProducts from '../containers/dashboard/containers/products';
import DashboardMessages from '../containers/dashboard/containers/messages';
import App from '../containers/app';
import Home from '../containers/home';

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="dashboard" component={Dashboard}>
              <IndexRoute component={MainDashboard}/>
              <Route path="products" component={DashboardProducts} />
              <Route path="messages" component={DashboardMessages} />
            </Route>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Root;