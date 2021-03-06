import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Home from './components/home/home';
import About from './components/about/about';
import Vehicles from './components/vehicle/vehicles';
import ManageVehicle from './components/vehicle/manageVehicles';
import Register from './components/identity/register';
import Signin from './components/identity/signin';
import AccountRecovery from './components/identity/accountrecovery';
import ResetPassword from './components/identity/resetpassword';
//import ProtectedRoute from './ProtectedRoute';

export default (
    <Route path="/" component={App}>    
        <IndexRoute component={Signin}/>
        <Route path="vehicles" component={Vehicles} />        
        <Route path="vehicle" component={ManageVehicle}/>        
        <Route path="vehicle/:Id" component={ManageVehicle}/>
        <Route path="register" component={Register}/>
        <Route path="signin" component={Signin}/>
        <Route path="accountrecovery" component={AccountRecovery}/>
        <Route path="resetpassword" component={ResetPassword}/>
        <Route path="home" component={Home}/>
    </Route>
);