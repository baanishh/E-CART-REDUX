import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice=createSlice({
    name:"whishlist",
    initialState:[],
    reducers:{
        addToWhishlist:(state,addFromView)=>{
            state.push(addFromView.payload)
        },
        removeItem:(state,actionFromWishlist)=>{
          return  state.filter(item=>item.id != actionFromWishlist.payload)
        }
    }
})
export const {addToWhishlist, removeItem}=wishlistSlice.actions
export default wishlistSlice.reducer