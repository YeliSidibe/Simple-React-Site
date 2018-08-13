import * as Types from './actionTypes';

function UserIsAuthenticated()
{
    return localStorage.getItem("auth_token") == null;
} 

export function ShowIdentityMenuSuccess(show)
{                
    if(show || UserIsAuthenticated()) return {type: Types.SHOW_IDENT_MENU_SUCCESS,showIdentityMenu: true};
    else return {type: Types.HIDE_IDENT_MENU_SUCCESS,showIdentityMenu: false};
}

function HideIdentityMenuSuccess()
{
    return {type: Types.HIDE_IDENT_MENU_SUCCESS,showIdentityMenu: false};
}
export function HideIdentityMenu()
{      
    return function(dispatch,getState)
    {                
        dispatch(HideIdentityMenuSuccess());
    };    
}