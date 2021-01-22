import {LOG_IN, LOG_OUT} from "../actions/types";

const defaultState = {
    loggedIn: false,
    user:{}
}

export default function (state = defaultState, action){
    switch(action.type){
        case LOG_IN:
            return {
                loggedIn: true,
                user:{...action.payload}
            };
        case LOG_OUT:
            return {
                loggedIn: false,
                user:{}
            };
        default:
            return state;
    }
}