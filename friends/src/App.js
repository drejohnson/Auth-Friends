import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Friends from './routes/Friends';
import Login from './routes/Login';
import GlobalStyles from './style/GlobalStyles';

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Switch>
        <Route path='/login'>
          {localStorage.getItem('token') ? <Redirect to='/' /> : <Login />}
        </Route>
        <PrivateRoute path='/'>
          <Friends />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
