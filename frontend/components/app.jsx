import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return(
    <Switch>
      <AuthRoute path='/login' component={} />
      <AuthRoute path='/signup' component={} />
      <ProtectedRoute path='/servers' component={} />
      <Route exact path='/' component={}/>
    </Switch>
  );
};

export default App;
