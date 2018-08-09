import * as Types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {        
    let endAction =  type.includes('_SUCCESS');    
    return endAction;
  }

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress,action){    
    if(action.type == Types.BEGIN_AJAX_CALL){        
        return state + 1;
    }
    else if(actionTypeEndsInSuccess(action.type)){            
        return state - 1;
    }         
    return state;
}

