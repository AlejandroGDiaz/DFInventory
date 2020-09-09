import {FETCH_CODES} from "../actions/types";

export default function (state =[], action){
    switch(action.type){
        case FETCH_CODES:
            return action.payload;
        default:
            return state;
    }
}