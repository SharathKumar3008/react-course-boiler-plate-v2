import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth'; 
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

import 'normalize.css';
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import './styles/styles.scss';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log('uid', user.uid);
        store.dispatch(login(user.uid));
        renderApp();
        if(history.location.pathname === '/'){
            history.push('/dashboard');
        }
    }else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});