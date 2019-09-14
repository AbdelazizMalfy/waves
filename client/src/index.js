import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import Reducers from './reducers';
import App from './App';
import './index.css';

const createStoreWithMiddleWare = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore)


ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(Reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())} >
        <BrowserRouter> 
            <App />
        </BrowserRouter>
    </Provider>,
 document.getElementById('root'));
