/**
 * @name App
 * @author Lester
 * @date 2021-06-01 15:48
 */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from 'src/layout/Layout';
import Context from 'src/store';
import NoPermission from 'src/pages/NoPermission/NoPermission';

const App: React.FC = () => {
  return (
    <Context>
      <div style={{ maxWidth: '3.6rem', margin: '0 auto', height: '100%' }}>
        <Router basename="/tenacity-webapp-sidebar">
          <Switch>
            <Route exact path="/noPermission" component={NoPermission} />
            <Route path="/" component={Layout} />
          </Switch>
        </Router>
      </div>
    </Context>
  );
};

export default App;
