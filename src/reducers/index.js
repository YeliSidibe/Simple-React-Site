import {combineReducers} from 'redux';
import vehicles from './vehicleReducer';
import customers from './customerReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import showIdentityMenu from './menuReducer';
import profile from './registerReducer';

const rootReducer = combineReducers({vehicles,customers,ajaxCallsInProgress,showIdentityMenu,profile}); // Combines our reducers, add a reducer everytime a reducer is created in the app

export default rootReducer;