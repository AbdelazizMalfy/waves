import axios from 'axios';
import {
    GET_PRODUCTS_BY_SELL,
    GET_PRODUCTS_BY_ARRIVAL,
    GET_BRANDS,
    GET_WOODS
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