import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import productReducer from "./productReducer";
import addReducer from "./addReducer";
import removeReducer from "./removeReducer";
import fetchRegisterReducer from "./fetchRegisterReducer";
import fetchInventoryReducer from "./fetchInventoryReducer";
import fetchCodeReducer from "./fetchCodeReducer";

export default combineReducers({
    product: productReducer,
    add: addReducer,
    remove: removeReducer,
    register: fetchRegisterReducer,
    inventory: fetchInventoryReducer,
    codes: fetchCodeReducer,
    form: reduxForm
})