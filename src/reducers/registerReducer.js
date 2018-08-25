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
        default:        
            return state;
    }
}