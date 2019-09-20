import axios from 'axios';
import {
    GET_PRODUCTS_BY_SELL,
    GET_PRODUCTS_BY_ARRIVAL,
    GET_BRANDS,
    GET_WOODS,
    GET_PORDUCTS_TO_SHOP
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
            return {
                size: response.data.size,
                products : response.data.products
            }
        })


    return {
        type: GET_PORDUCTS_TO_SHOP,
        payload: request
    }
}



///////////////////////
//////  Catg.
///////////////////////

export function getBrands(){
    const requset = axios.get(`${PRODUCT_SERVER}/brands`)
        .then(response => response.data)

    return {
        type: GET_BRANDS,
        payload: requset
    }
}

export function getWoods(){
    const requset = axios.get(`${PRODUCT_SERVER}/woods`)
        .then(response => response.data)

    return {
        type: GET_WOODS,
        payload: requset
    }
}