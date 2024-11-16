import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/productSlice'
import wishlistSlice from "./slices/wishlistSlice";


const cartStore=configureStore({
    reducer:{
        productReducer:productSlice,
        whishlistReducer:wishlistSlice
    }
})
export default cartStore