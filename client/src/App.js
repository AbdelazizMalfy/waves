import React from 'react';
import { Switch , Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Layout from './hoc/Layout';
import RegisterLogin from './components/Register_Login'
import Register from './components/Register_Login/Register';
import Dashboard from './components/Dashboard';
import AuthenticationCheck from './hoc/AuthenticationCheck/AuthenticationCheck';

const App = () => {
    return (
      <Layout>
        <Switch>
          <Route path="/user/dashboard" exact component={AuthenticationCheck(Dashboard,true)} />
          
          <Route path="/register" exact component={AuthenticationCheck(Register,false)} />
          <Route path="/register_login" exact component={AuthenticationCheck(RegisterLogin,false)} />
          <Route path="/" exact component={AuthenticationCheck(Home,null)} />
        </Switch>
      </Layout>
    );
}

export default App;
