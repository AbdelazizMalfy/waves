import React from 'react';
import { Switch , Route } from 'react-router-dom';
import './App.css';
import AuthenticationCheck from './hoc/AuthenticationCheck/AuthenticationCheck';
import Layout from './hoc/Layout';

import Dashboard from './components/Dashboard';
import AddProduct from './components/Dashboard/Admin/AddProduct';
import ManageCateg from './components/Dashboard/Admin/ManageCateg';

import Register from './components/Register_Login/Register';
import RegisterLogin from './components/Register_Login'
import Shop from './components/Shop';
import Home from './components/Home';

const App = () => {
    return (
      <Layout>
        <Switch>
          <Route path="/user/dashboard" exact component={AuthenticationCheck(Dashboard,true)} />
          <Route path="/admin/add_product" exact component={AuthenticationCheck(AddProduct,true)} />
          <Route path="/admin/manage_categories" exact component={AuthenticationCheck(ManageCateg,true)} />
          
          <Route path="/register" exact component={AuthenticationCheck(Register,false)} />
          <Route path="/register_login" exact component={AuthenticationCheck(RegisterLogin,false)} />
          <Route path="/shop" exact component={AuthenticationCheck(Shop,null)} />
          <Route path="/" exact component={AuthenticationCheck(Home,null)} />
        </Switch>
      </Layout>
    );
}

export default App;
