import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../src/components/home/Home';
import RecommenderContainer from '../src/containers/RecommenderContainer';

export default function App() {
  return (
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
  );
}
