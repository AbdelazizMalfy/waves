import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  componentDidMount(){
    axios.get('/api/product/products').then(response => {
      console.log(response);
    })
  }
  render(){
    return (
      <div>
        My App
      </div>
    );
  }
}

export default App;
