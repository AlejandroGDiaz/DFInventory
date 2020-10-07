import {FETCH_TOTALES} from "../actions/types";

export default function (state =[], action){
    switch(action.type){
        case FETCH_TOTALES:
            return action.payload;
        default:
            return state;
    }
}