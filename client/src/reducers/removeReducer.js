import {REMOVE_MATERIAL} from "../actions/types";

export default function (state ={}, action){
    
    switch(action.type){
        case REMOVE_MATERIAL:
            return action.payload;
        default:
            return state;
    }
}