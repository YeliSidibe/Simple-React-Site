import * as Types from '../actions/actionTypes';
import initialState from './initialState';

export default function customerReducer(state = initialState.customers,action){
    switch(action.type){
        case Types.CREATE_CUSTOMER:
            return [...state,Object.assign({},action.customer)]; // Replaces state.push(action.vehicle); return state;           
        case Types.LOAD_CUSTOMERS_SUCCESS:           
            return action.customers;
        default:
            return state;
    }
}