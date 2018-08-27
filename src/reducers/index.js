import {combineReducers} from 'redux';
import vehicles from './vehicleReducer';
import customers from './customerReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import profile from './registerReducer';
<<<<<<< HEAD
import * as Types from '../actions/actionTypes';

//const rootReducer = combineReducers({vehicles,customers,ajaxCallsInProgress,profile}); // Combines our reducers, add a reducer everytime a reducer is created in the app
const appReducer = combineReducers({vehicles,customers,ajaxCallsInProgress,profile}); // Combines our reducers, add a reducer everytime a reducer is created in the app

const initialState = appReducer({},{},{},{});
  
const rootReducer = (state, action) => {
    if (action.type === Types.CLEAR_STORE_SUCCESS) {
      state = initialState;
    }  
    return appReducer(state, action);
};
=======
import reset from './resetReducer';

const rootReducer = combineReducers({vehicles,customers,ajaxCallsInProgress,profile,reset}); // Combines our reducers, add a reducer everytime a reducer is created in the app
>>>>>>> b2c27e5611c6c549d341f541553945af4604d50e

export default rootReducer;