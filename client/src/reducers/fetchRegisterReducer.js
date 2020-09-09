import {FETCH_REGISTER} from "../actions/types";

export default function (state =[], action){
    switch(action.type){
        case FETCH_REGISTER:
            return action.payload;
        default:
            return state;
    }
}