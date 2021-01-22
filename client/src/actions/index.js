import axios from "axios";
import { 
        FETCH_PRODUCT, 
        ADD_MATERIAL,
        REMOVE_MATERIAL, 
        FETCH_REGISTER, 
        FETCH_INVENTORY,
        FETCH_CODES,
        ADD_ORDER,
        FETCH_ORDER,
        FETCH_TOTALES,
        FETCH_ORDENES_ACTIVAS,
        LOG_IN,
        LOG_OUT, 
        CURRENT_USER} from "./types";

export const fetchCodes = () => async (dispatch) => {
        const res = await axios.get("/api/productos")

        dispatch({type: FETCH_CODES, payload: res.data})
}

export const fetchProduct = (codigo) => async (dispatch) => {

        const res = await axios.post("/api/product", {codigo})

        dispatch({type: FETCH_PRODUCT, payload: res.data});
    
};

export const addMaterial = (values, history) => async (dispatch) => {

        const res = await axios.post("/api/product/alta", values)

        if(res.data===""){
           history.push("/failure")     
        }
        else{
        history.push("/success") 
        
        }

        dispatch({type: ADD_MATERIAL, payload: res.data})
}

export const removeMaterial = (values, history) => async (dispatch) => {

        const res = await axios.post("/api/product/baja", values)
        
        if(res.data){
           history.push("/success")     
        }else{
           history.push("/failure") 
        }
        

        dispatch({type: REMOVE_MATERIAL, payload: res.data})

}

export const fetchRegister = (values) => async (dispatch) => {

        const res = await axios.post("/api/register", values)

        dispatch({type: FETCH_REGISTER, payload: res.data})
}

export const fetchInventory = (values) => async (dispatch) => {

        const res = await axios.post("/api/inventario", values)

        dispatch({type: FETCH_INVENTORY, payload: res.data})
}

export const addOrder = (values, history) => async (dispatch) => {
        const res = await axios.post("/api/order/new", values)

         if(res.data===""){
           history.push("/failure")     
        }else{
           history.push("/success") 
        }

        dispatch({type:ADD_ORDER, payload: res.data})
}

export const fetchOrder = (values) => async (dispatch) => {

        const res = await axios.post("/api/order/search", values)

        dispatch({type: FETCH_ORDER, payload: res.data})
}

export const fetchTotales = () => async (dispatch) => {
        const res = await axios.get("/api/order/total")

        dispatch({type: FETCH_TOTALES, payload: res.data})
}

export const fetchOrdenesActivas = () => async (dispatch) => {
        const res = await axios.get("/api/order/active")

        dispatch({type: FETCH_ORDENES_ACTIVAS, payload: res.data})
}

// ************************************  auth  ******************************** //

export const logIn = (values, history) => async (dispatch) => {
        const res = await axios.post("/api/login", values)

        if(res.data === ""){
                history.go(0)
        }

        dispatch({type: LOG_IN, payload: res.data})
        history.go(0)
}

export const logOut = (history) => async (dispatch) => {
        const res = await axios.get("/api/logout")

        dispatch({type: LOG_OUT, payload: res.data})
        history.go(0)
}

export const currentUser = () => async (dispatch) => {
        const res = await axios.get("/api/current_user")

        dispatch({type: CURRENT_USER, payload: res.data})
}