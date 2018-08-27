import * as Types from './actionTypes';
import RegisterReducer from '../reducers/registerReducer';
import {beginAjaxCall} from '../actions/ajaxStatusActions';
import ProfileService from '../api/ProfileService';
import {LoadVehicles} from '../actions/vehicleActions';
import resetReducer from '../reducers/resetReducer';

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
    return {type:Types.LOG_OUT_SUCCESS,profile:profile};
}
<<<<<<< HEAD
export function ClearStore()
{
    return {type:Types.CLEAR_STORE_SUCCESS};
}
=======
>>>>>>> b2c27e5611c6c549d341f541553945af4604d50e
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
        .catch((error) => { throw error;});   
    };
}

export function Logout(profile)
{
    return function(dispatch,getState)
    {        
        dispatch(beginAjaxCall());        
        return ProfileService.SignOut(profile)
<<<<<<< HEAD
        .then(response =>{
            dispatch(LogoutSuccess(response));            
            dispatch(ClearStore(response));   
        })
        .catch((error) => { throw error;});
    };
}
=======
        .then(response =>{dispatch(LogoutSuccess(response));})
        .catch((error) => { throw error;});
    };
}
>>>>>>> b2c27e5611c6c549d341f541553945af4604d50e
