import { 
    GET_PRODUCTS_BY_SELL,
    GET_PRODUCTS_BY_ARRIVAL,
    GET_BRANDS,
    GET_WOODS,
    GET_PORDUCTS_TO_SHOP,
    POST_PRODUCT,
    POST_BRAND,
    POST_WOOD
} from '../actions/types';

export default function(state={},action){
    switch(action.type){
        case GET_PRODUCTS_BY_SELL:
            return {
                ...state, 
                bySell: action.payload
            }
        case GET_PRODUCTS_BY_ARRIVAL:
            return {
                ...state,
                 byArrival: action.payload
                }
        case GET_BRANDS:
            return {
                ...state,
                 brands: action.payload}
        case GET_WOODS:
            return {
                ...state,
                 woods: action.payload}
        case GET_PORDUCTS_TO_SHOP:
            return {
                ...state,
                    toShop: action.payload.products,
                    toShopSize: action.payload.size
            }
        case POST_PRODUCT:
            return {
                ...state,
                addedProduct: action.payload
            }
        case POST_BRAND:
            return{
                ...state,
                addBrand: action.payload
            }
        case POST_WOOD:
            return{
                ...state,
                addWood: action.payload
            }
        default:
            return {...state}
    }
    
}