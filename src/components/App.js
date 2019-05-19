import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import TvShow from './TvShow';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:tvshowId" component={TvShow} exact />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;