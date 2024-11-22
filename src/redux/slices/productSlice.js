import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts=createAsyncThunk("products/fetchProducts",async()=>{
    const result=await axios.get("https://dummyjson.com/products")
    // console.log(result.data.products);
    sessionStorage.setItem("allProducts",JSON.stringify(result.data.products))
    return result.data.products
})

const productSlice=createSlice({
    name:"products",
    initialState:{
        allProducts:[],
        dummyAllProducts:[],
        isLoading:false,
        errMsg:''
    },
    reducers:{
        searchProduct:(state,actionByHeader)=>{
            state.allProducts=state.dummyAllProducts.filter(item=>item.title.toLowerCase().includes(actionByHeader.payload))
        }
    },
    extraReducers:(builders)=>{
        builders.addCase(fetchProducts.fulfilled,(state,apiResult)=>{
            state.allProducts=apiResult.payload
            state.dummyAllProducts=apiResult.payload
            state.isLoading=false
            state.errMsg=''
        })
        builders.addCase(fetchProducts.pending,(state)=>{
            state.allProducts=[]
            state.dummyAllProducts=[]
            state.isLoading=true
            state.errMsg=''
        })
        builders.addCase(fetchProducts.rejected,(state)=>{
            state.allProducts=[]
            state.dummyAllProducts=[]
            state.isLoading=false
            state.errMsg='API call failed'
        })
    }
})
export const {searchProduct}=productSlice.actions
export default productSlice.reducer