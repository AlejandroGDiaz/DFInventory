import {FETCH_INVENTORY} from "../actions/types";

export default function (state =[], action){
    switch(action.type){
        case FETCH_INVENTORY:
            return action.payload;
        default:
            return state;
    }
}