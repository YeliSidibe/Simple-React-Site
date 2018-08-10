import * as Types from '../actions/actionTypes';
import initialState from './initialState';

export default function registerReducer(state = initialState.profile,action)
{    
    switch(action.type){
        case Types.CREATE_PROFILE_SUCCESS:                        
            return state = Object.assign({},action.profile);
        default:        
            return state;
    }
}