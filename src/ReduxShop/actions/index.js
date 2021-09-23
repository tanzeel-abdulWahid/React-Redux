import { ActionTypes } from "../constants/action-types";
import fakeStoreApi from "../apis/fakeStoreApi";


export const fetchProducts = () => async(dispatch) => {
    const response = await fakeStoreApi.get("/products");
    console.log({response});
    dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data});
}

export const fetchProduct = (id) => async(dispatch) => {
    const response = await fakeStoreApi.get(`/products/${id}`);
    dispatch({type:ActionTypes.SELECTED_PRODUCT,payload:response.data});
}

export const removeSelectedProduct = () => {
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};