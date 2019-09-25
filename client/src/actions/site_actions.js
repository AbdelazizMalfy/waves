import axios from 'axios';

import { 
    GET_SITE_INFO
    
} from './types'

import { SITE_SERVER } from '../components/utils/misc';


export function getSiteInfo(){

    const request = axios.get(`${SITE_SERVER}/site_info`)
        .then(response => response.data);

    return {
        type: GET_SITE_INFO,
        payload: request
    }
    
}