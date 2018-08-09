import * as Types from './actionTypes';
import CustomerService from '../api/mockOwnersApi';
import customerReducer from '../reducers/customerReducer';
import {beginAjaxCall} from '../actions/ajaxStatusActions';

export function CreateCustomer(customer){
    return {type: Types.CREATE_CUSTOMER,customer };
}

export function LoadCustomerSuccess(customers){
    return {type: Types.LOAD_CUSTOMERS_SUCCESS,customers };
}

export function LoadCustomers()
{    
    return function(dispatch)
    {        
        dispatch(beginAjaxCall());
        return CustomerService.getAllCustomers().then(customers =>{
            dispatch(LoadCustomerSuccess(customers));
        }).catch(error => {throw(error);});
    };    
}