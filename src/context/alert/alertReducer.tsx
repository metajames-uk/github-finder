import {SET_ALERT, REMOVE_ALERT} from '../types';

export default (state: any, action: any) => {
    switch(action.type) {
        case REMOVE_ALERT:
            return {
                ...state,
                    msg: '',
                    type: ''
            }
        case SET_ALERT:
            return {
                ...state,
                msg: action.payload.msg,
                type: action.payload.type
            }
        default:
            return state
    }
}