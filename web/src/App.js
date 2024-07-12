// /gestion-finanzas/web/src/App.js

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gastos from './components/Gastos';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Gastos} />
      </Switch>
    </Router>
  );
}

export default App;