import {ADD_MATERIAL} from "../actions/types";

export default function (state ={}, action){
    switch(action.type){
        case ADD_MATERIAL:
            return action.payload;
        default:
            return state;
    }
}