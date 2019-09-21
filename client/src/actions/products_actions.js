import axios from 'axios';
import {
    GET_PRODUCTS_BY_SELL,
    GET_PRODUCTS_BY_ARRIVAL,
    GET_BRANDS,
    GET_WOODS,
    GET_PORDUCTS_TO_SHOP,
    POST_PRODUCT,
    POST_BRAND,
    POST_WOOD
} from './types';

import { PRODUCT_SERVER } from '../components/utils/misc';


export function getProductBySell(){
    const requset = axios.get(`${PRODUCT_SERVER}/products?sortBy=sold&order=desc&limit=4`).then(response => response.data)

    return {
        type :GET_PRODUCTS_BY_SELL,
        payload: requset
    }
}


export function getProductByArrival(){
    const requset = axios.get(`${PRODUCT_SERVER}/products?sortBy=createdAt&order=desc&limit=4`).then(response => response.data)

    return {
        type :GET_PRODUCTS_BY_ARRIVAL,
        payload: requset
    }
}

export function getProductsToShop(skip,limit,filters=[],previousState=[]){
    const data ={
        limit,
        skip,
        filters
    }
    const request = axios.post(`${PRODUCT_SERVER}/shop`,data)
        .then(response => {
            let newState = [
                ...previousState,
                ...response.data.products
            ]

            return {
                size: response.data.size,
                products : newState
            }
        })


    return {
        type: GET_PORDUCTS_TO_SHOP,
        payload: request
    }
}

export function postProduct(dataToSubmit){
    const request = axios.post(`${PRODUCT_SERVER}/product`, dataToSubmit)
        .then(response => response.data)

    return {
        type: POST_PRODUCT,
        payload: request
    }
}



///////////////////////
//////  Catg.
///////////////////////

export function getBrands(){
    const request = axios.get(`${PRODUCT_SERVER}/brands`)
        .then(response => response.data)

    return {
        type: GET_BRANDS,
        payload: request
    }
}

export function postBrand(dataToSubmit){
    const request = axios.post(`${PRODUCT_SERVER}/brand`,dataToSubmit)
        .then(response => response.data)

    return {
        type:POST_BRAND,
        payload:request
    }
}

export function getWoods(){
    const request = axios.get(`${PRODUCT_SERVER}/woods`)
        .then(response => response.data)

    return {
        type: GET_WOODS,
        payload: request
    }
}


export function postWood(dataToSubmit){
    const request = axios.post(`${PRODUCT_SERVER}/wood`,dataToSubmit)
        .then(response => response.data)

    return {
        type:POST_WOOD,
        payload:request
    }
}
