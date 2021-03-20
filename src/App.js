import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastProvider, DefaultToast } from 'react-toast-notifications';

import Home from '../src/components/home/Home';
import RecommenderContainer from '../src/containers/RecommenderContainer';

export default function App() {
  return (
    <ToastProvider
      autoDismiss={true}
      autoDismissTimeout={5000}
      components={{ Toast: DefaultToast }}
      placement="bottom-center"
    >
      <Router>
        <div className="app-container">
          <Switch>
            <Route path="/recomendador">
              <RecommenderContainer />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ToastProvider>
  );
}
