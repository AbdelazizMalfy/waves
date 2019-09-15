import React from 'react';
import { Switch , Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Layout from './hoc/Layout';
import RegisterLogin from './components/Register_Login'
import Register from './components/Register_Login/Register';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
      <Layout>
        <Switch>
          <Route path="/user/dashboard" exact component={Dashboard} />
          
          <Route path="/register" exact component={Register} />
          <Route path="/register_login" exact component={RegisterLogin} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
}

export default App;
