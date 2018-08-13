import React from 'react';

import ReactDOM from 'react-dom'

import App from './components/App'

import {createStore} from 'redux';
/* Provider component to specify store */
import {Provider} from 'react-redux'

/* setting up stores */

import rootReducers from './reducers'

const store = createStore(rootReducers);
console.log('store.getstate()', store.getState())

ReactDOM.render(
   <Provider store = {store}>
        <App />
   </Provider>, document.getElementById('root')
    
)