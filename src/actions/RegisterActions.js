import * as Types from './actionTypes';
import RegisterReducer from '../reducers/registerReducer';
import {beginAjaxCall,NotifyAjaxFailure} from '../actions/ajaxStatusActions';
import ProfileService from '../api/ProfileService';
import {LoadVehicles} from '../actions/vehicleActions';

export function CreateProfileSuccess(profile)
{
    return {type:Types.CREATE_PROFILE_SUCCESS,profile};
}

export function LoginSuccess(profile)
{
    return {type:Types.LOG_IN_SUCCESS,profile:profile};
}
export function LogoutSuccess(profile)
{
    return {type:Types.CLEAR_STORE_SUCCESS,profile:profile};
}
export function SendRecoveryCodeSuccess(profile)
{
    return {type:Types.SEND_RECOVERY_CODE_SUCCESS,profile:profile};
}
export function ResetUserPasswordSuccess(profile)
{
    return {type:Types.RESET_USER_PASSWORD_SUCCESS,profile:profile};
}
export function CreateProfile(profile)
{   
    return function(dispatch,getState)
    {
        dispatch(beginAjaxCall());        
        return ProfileService.CreateProfile(profile)
        .then(createProfileResponse =>{
            dispatch(CreateProfileSuccess(createProfileResponse));
            if(profile.externalProviderLogin == true) { dispatch(LoadVehicles()); }
        })
        .catch((error) => {dispatch(CreateProfileSuccess(error));});
    }; 
}

export function Login(profile)
{
    return function(dispatch,getState)
    {
        dispatch(beginAjaxCall());        
        return ProfileService.Authenticate(profile)
        .then(response =>{dispatch(LoginSuccess(response));dispatch(LoadVehicles());})
        .catch((error) => { dispatch(NotifyAjaxFailure());throw error;});   
    };
}

export function Logout(profile)
{
    return function(dispatch,getState)
    {        
        dispatch(beginAjaxCall());
        return ProfileService.SignOut(profile)
        .then(response =>{dispatch(LogoutSuccess(response));})
        .catch((error) => { dispatch(NotifyAjaxFailure());throw error;});
    };
}

export function SendOTP(profile)
{
    return function(dispatch,getState)
    {
        dispatch(beginAjaxCall());
        return ProfileService.SendOTP(profile)
        .then(response =>{dispatch(SendRecoveryCodeSuccess(response));})
        .catch((error) => { dispatch(NotifyAjaxFailure());throw error;});
    };
}

export function ResetUserPassword(profile)
{
    return function(dispatch,getState)
    {
        dispatch(beginAjaxCall());
        return ProfileService.ResetUserPassword(profile)
        .then(response =>{dispatch(ResetUserPasswordSuccess(response));})
        .catch((error) => { dispatch(NotifyAjaxFailure());throw error;});
    };
}