import React from 'react';
import { Switch , Route } from 'react-router-dom';
import './App.css';
import AuthenticationCheck from './hoc/AuthenticationCheck/AuthenticationCheck';
import Layout from './hoc/Layout';

//Auth
import Dashboard from './components/Dashboard';
import UserCart from './components/Dashboard/Cart';
import UpdatePersonalInfo from './components/Dashboard/UpdateProfile';

//Admin
import AddProduct from './components/Dashboard/Admin/AddProduct';
import ManageCateg from './components/Dashboard/Admin/ManageCateg';

//Not Auth
import Register from './components/Register_Login/Register';
import RegisterLogin from './components/Register_Login'

//Public
import ProductDetails from './components/Product';
import Shop from './components/Shop';
import Home from './components/Home';

const App = () => {
    return (
      <Layout>
        <Switch>
          <Route path="/user/dashboard" exact component={AuthenticationCheck(Dashboard,true)} />
          <Route path="/user/cart" exact component={AuthenticationCheck(UserCart,true)} />
          <Route path="/user/user_profile" exact component={AuthenticationCheck(UpdatePersonalInfo,true)} />

          <Route path="/admin/add_product" exact component={AuthenticationCheck(AddProduct,true)} />
          <Route path="/admin/manage_categories" exact component={AuthenticationCheck(ManageCateg,true)} />
          
          <Route path="/register" exact component={AuthenticationCheck(Register,false)} />
          <Route path="/register_login" exact component={AuthenticationCheck(RegisterLogin,false)} />

          <Route path="/product_detail/:id" exact component={AuthenticationCheck(ProductDetails,null)} />
          <Route path="/shop" exact component={AuthenticationCheck(Shop,null)} />
          <Route path="/" exact component={AuthenticationCheck(Home,null)} />
        </Switch>
      </Layout>
    );
}

export default App;
