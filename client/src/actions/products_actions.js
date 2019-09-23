import axios from 'axios';
import {
    GET_PRODUCTS_BY_SELL,
    GET_PRODUCTS_BY_ARRIVAL,
    GET_BRANDS,
    GET_WOODS,
    GET_PORDUCTS_TO_SHOP,
    POST_PRODUCT,
    POST_BRAND,
    POST_WOOD,
    GET_PRODUCT_DETAIL,
    CLEAR_PRODUCT_DETAIL
} from './types';

import { PRODUCT_SERVER } from '../components/utils/misc';



export function getProductDetail(id){
    const request = axios.get(`${PRODUCT_SERVER}/products_by_id?id=${id}&type=single`)
        .then(response => response.data[0])

    return{
        type: GET_PRODUCT_DETAIL,
        payload: request
    }
}


export function clearProductDetail(){
    return {
        type: CLEAR_PRODUCT_DETAIL,
        payload: ''
    }

}



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

export function postBrand(dataToSubmit,existingBrands){
    const request = axios.post(`${PRODUCT_SERVER}/brand`,dataToSubmit)
        .then(response => {
            let brands = [
                ...existingBrands,
                response.data.brand
            ]

            return {
                addBrandSuccess : response.data.addBrandSuccess,
                brands
            }
        })
        
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


export function postWood(dataToSubmit,existingWoods){
    const request = axios.post(`${PRODUCT_SERVER}/wood`,dataToSubmit)
        .then(response => {
            let woods = [
                ...existingWoods,
                response.data.wood
            ]

            return {
                addWoodSuccess : response.data.addWoodSuccess,
                woods
            }
        })

    return {
        type:POST_WOOD,
        payload:request
    }
}
