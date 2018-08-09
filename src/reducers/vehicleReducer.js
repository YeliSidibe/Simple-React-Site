import * as Types from '../actions/actionTypes';
import initialState from './initialState';

export default function vehicleReducer(state = initialState.vehicles, action) {
    switch (action.type) {
        case Types.CREATE_VEHICLE:
            return [...state, Object.assign({}, action.vehicle)]; // Replaces state.push(action.vehicle); return state;           
        case Types.LOAD_VEHICLES_SUCCESS:
            return action.vehicles;
        case Types.CREATE_VEHICLE_SUCCESS:
            return [...state, Object.assign({}, action.vehicle)];
        case Types.UPDATE_VEHICLE_SUCCESS:
            return [...state.filter(vehicle => vehicle.Id !== action.vehicle.Id), Object.assign({}, action.vehicle)];
        default:
            return state;
    }
}