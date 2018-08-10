import React from 'react'
import ReactDOM from'react-dom';

/* redux */
import {Provider} from 'react-redux'
import {createStore} from 'redux'

/* react router for mulitiple pages */
import {Router, Route, browserHistory} from 'react-router';

/* Google firebase */
import {firebaseApp} from './firebase'

import{logUser} from './action'

/* import reducer */
import reducer from './reducers'


/* App components  */
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


const store = createStore(reducer);




 /* Adding listner to tell if a user is authenticated */
firebaseApp.auth().onAuthStateChanged(user => {

    if(user){
        //console.log('user has signed in or up', user);
        const {email} =user
        store.dispatch(logUser(email))
        browserHistory.push('/app');
    }
    else
    {
        //console.log('user has signed out or still needs to sign in', user);
        browserHistory.replace('/signin')
    }
})

ReactDOM.render(
    <Provider store={store}>

        <Router path="/" history={browserHistory}>
        <Route path="/app" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />

        </Router>

    </Provider>,document.getElementById('root')
 
)