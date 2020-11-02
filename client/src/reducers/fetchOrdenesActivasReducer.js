import {FETCH_ORDENES_ACTIVAS} from "../actions/types";

export default function (state =[], action){
    switch(action.type){
        case FETCH_ORDENES_ACTIVAS:
            return action.payload;
        default:
            return state;
    }
}