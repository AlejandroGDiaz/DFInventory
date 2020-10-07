import {ADD_ORDER} from "../actions/types";

export default function (state ={}, action){
    switch(action.type){
        case ADD_ORDER:
            return action.payload;
        default:
            return state;
    }
}