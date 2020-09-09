import axios from "axios";
import { FETCH_PRODUCT, 
        ADD_MATERIAL,
         REMOVE_MATERIAL, 
         FETCH_REGISTER, 
         FETCH_INVENTORY,
        FETCH_CODES } from "./types";

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
