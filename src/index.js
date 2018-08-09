import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router,browserHistory} from 'react-router';
import routes from './routes';
import {LoadVehicles} from './actions/vehicleActions';
import {LoadCustomers} from './actions/customerActions';
import {ShowIdentityMenuSuccess} from './actions/menuActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './styles/styles.css'; // WebPack can import files too!


const store = configureStore();
store.dispatch(ShowIdentityMenuSuccess());
store.dispatch(LoadVehicles());
store.dispatch(LoadCustomers());


render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,    
    document.getElementById('app') 
);
