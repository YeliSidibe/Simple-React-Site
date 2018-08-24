import * as Types from '../actions/actionTypes';
import initialState from './initialState';

export default function resetReducer(state = initialState,action)
{    
    switch(action.type){
        case 'valida':
            state = initialState;
            return state;
        default:        
            return state;
    }
}