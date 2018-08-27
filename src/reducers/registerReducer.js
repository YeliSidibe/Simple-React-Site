import * as Types from '../actions/actionTypes';
import initialState from './initialState';

export default function registerReducer(state = initialState.profile,action)
{    
    switch(action.type){
        case Types.CREATE_PROFILE_SUCCESS:  
            return state = Object.assign({},action.profile);
        case Types.LOG_IN_SUCCESS:            
            return state = Object.assign({},action.profile);
        case Types.LOG_OUT_SUCCESS:
            state = initialState;
            return state;
        case Types.SEND_RECOVERY_CODE_SUCCESS:
            return state = Object.assign({},action.profile);
        case Types.RESET_USER_PASSWORD_SUCCESS:
            return state = Object.assign({}, action.profile);
        default:        
            return state;
    }
}