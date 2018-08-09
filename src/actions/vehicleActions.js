import * as Types from './actionTypes';
import VehicleService from '../api/mockVehicleApi';
import vehicleReducer from '../reducers/vehicleReducer';
import {beginAjaxCall} from '../actions/ajaxStatusActions';

export function CreateVehicle(vehicle){
    return {type: Types.CREATE_VEHICLE,vehicle };
}

export function updateVehicleSuccess(vehicle){    
    return {type: Types.UPDATE_VEHICLE_SUCCESS,vehicle };
}

export function createVehicleSuccess(vehicle){    
    return {type: Types.CREATE_VEHICLE_SUCCESS,vehicle };
}

export function LoadVehiclesSuccess(vehicles){
    return {type: Types.LOAD_VEHICLES_SUCCESS,vehicles };
}

export function LoadVehicles()
{        
    return function(dispatch)
    {    
        dispatch(beginAjaxCall());        
        return VehicleService.getAllVehicles().then(vehicles =>{
            dispatch(LoadVehiclesSuccess(vehicles));
        }).catch(error => {throw(error);});
    };    
}

export function SaveVehicle(vehicle)
{    
    return function(dispatch,getState)
    {
        dispatch(beginAjaxCall());        
        return VehicleService.saveVehicle(vehicle).then(savedVehicle =>{
            vehicle.Id ? dispatch(updateVehicleSuccess(savedVehicle)) :  dispatch(createVehicleSuccess(savedVehicle));
        }).catch(error => {throw(error);});
    };    
}