import * as Types from './actionTypes';

export function beginAjaxCall()
{
    return {type: Types.BEGIN_AJAX_CALL};
}

export function NotifyAjaxFailure()
{
    return {type:Types.REPORT_FAILURE_SUCCESS};
}