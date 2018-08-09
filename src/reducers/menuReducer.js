import * as Types from '../actions/actionTypes';
import initialState from './initialState';

export default function menuReducer(state = initialState.showIdentityMenu,action)
{                
    if(action.type == Types.SHOW_IDENT_MENU_SUCCESS)
    {                      
        return state  = true;        
    }
    else if(action.type == Types.HIDE_IDENT_MENU_SUCCESS)
    {                          
        return state = false;
    }    
    return state;
}