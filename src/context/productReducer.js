import {ADDCART, LISTPRODUCTS,ADDFAVOURITE} from "../contants/productsContants";
import { db } from '../db';

const initialState = {
    product:[],
    cart:[],
    
};


function userReducer(state = initialState, action){
    switch(action.type){
    case LISTPRODUCTS:
        return {...state, product: action.payload};

    case ADDCART:
        {
            return{
                ...state,
                cart: state.cart
            }
        }
        case ADDFAVOURITE:
            {
                return{
                    ...state,
                    cart: state.cart
                }
            }
     

    default: 
        return state;
    }
}

export default userReducer;