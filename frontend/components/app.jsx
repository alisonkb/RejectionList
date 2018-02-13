import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/routeUtil';
import SessionFormContainer from './Session/SessionFormContainer';
import RejectionIndexContainer from './Rejection/RejectionIndexContainer';
import LandingContainer from './Landing/LandingContainer';

const App = () => {
  return(
    <Switch>
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <ProtectedRoute path='/rejections' component={RejectionIndexContainer} />
      <Route exact path='/' component={LandingContainer}/>
    </Switch>
  );
};

export default App;
