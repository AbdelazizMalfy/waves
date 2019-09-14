import React from 'react';
import { Switch , Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Layout from './hoc/Layout';
import RegisterLogin from './components/Register_Login'

const App = () => {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register_login" exact component={RegisterLogin} />
        </Switch>
      </Layout>
    );
}

export default App;
