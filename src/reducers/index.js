import {combineReducers} from 'redux';
import vehicles from './vehicleReducer';
import customers from './customerReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import profile from './registerReducer';
import reset from './resetReducer';

const rootReducer = combineReducers({vehicles,customers,ajaxCallsInProgress,profile,reset}); // Combines our reducers, add a reducer everytime a reducer is created in the app

export default rootReducer;