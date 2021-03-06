import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import productReducer from "./productReducer";
import addReducer from "./addReducer";
import removeReducer from "./removeReducer";
import fetchRegisterReducer from "./fetchRegisterReducer";
import fetchInventoryReducer from "./fetchInventoryReducer";
import fetchCodeReducer from "./fetchCodeReducer";
import addOrderReducer from "./addOrderReducer";
import fetchOrderReducer from "./fetchOrderReducer";
import fetchTotalesReducer from "./fetchTotalesReducer";
import fetchOrdenesActivasReducer from "./fetchOrdenesActivasReducer";
import userAuthReducer from "./userAuthReducer";
import userReducer from "./userReducer";

export default combineReducers({
    product: productReducer,
    add: addReducer,
    remove: removeReducer,
    register: fetchRegisterReducer,
    inventory: fetchInventoryReducer,
    codes: fetchCodeReducer,
    addOrder: addOrderReducer,
    order: fetchOrderReducer,
    total: fetchTotalesReducer,
    ordenesActivas: fetchOrdenesActivasReducer,
    userAuth: userAuthReducer,
    user: userReducer,
    form: reduxForm
})