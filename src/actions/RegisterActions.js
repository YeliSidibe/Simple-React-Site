import * as Types from './actionTypes';
import RegisterReducer from '../reducers/registerReducer';
import {beginAjaxCall} from '../actions/ajaxStatusActions';
import ProfileService from '../api/ProfileService';

export function CreateProfileSuccess(profile)
{
    return {type:Types.CREATE_PROFILE_SUCCESS,profile};
}

export function CreateProfile(profile)
{   
    return function(dispatch,getState)
    {
        dispatch(beginAjaxCall());        
        return ProfileService.CreateProfile(profile).then(createProfileResponse =>{            
            dispatch(CreateProfileSuccess(createProfileResponse));
        }).catch((error) => {throw error;});
    }; 
}