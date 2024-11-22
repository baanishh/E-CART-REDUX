import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWhishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

const View = () => {
  const dispatch=useDispatch()
  const userCart=useSelector(state=>state.cartReducer)
  const userWishlist=useSelector(state=>state.whishlistReducer)
  const [product,setProduct]=useState({})
  const {id}=useParams()
  // console.log(product);

  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts=JSON.parse(sessionStorage.getItem("allProducts"))
      setProduct(allProducts.find(item=>item.id==id))
    }
  },[])

  const handleWhishlist=()=>{
    const existing=userWishlist?.find(item=>item?.id==id)
    if(existing){
      alert("item already exist")
    }else{
      alert("item added successfully")
      dispatch(addToWhishlist(product))
    }
  }
  
  const handleCart=()=>{
    dispatch(addToCart(product))
    const existing=userCart?.find(item=>item?.id==id)
    if(existing){
      alert("Product Quantity Increased")
    }else{
      alert("Item added  to cart successfully")
    }
  }
  
  return (
    <>
      <Header />
      <div className="flex flex-col pt-5 mx-5">
        <div className="grid items-center h-screen grid-cols-2">
          <div>
          <img
            className="ms-40"
            width={"350px"}
            height={"250px"}
            src={product.thumbnail}
            alt=""
          />
           <div className="flex justify-between m-5">
                <button className="p-2 text-white bg-blue-600 rounded" onClick={handleWhishlist}>ADD TO WHISHLIST</button>
                <button className="p-2 text-white bg-green-600 rounded" onClick={handleCart}>ADD TO CART</button>
            </div>
          </div>
          <div>
            <h3 className="font-bold">PID :{product.id}</h3>
            <h1 className="text-5xl font-bold">{product.title}</h1>
            <h4 className="text-2xl font-bold text-red-600">{product.title}</h4>
            <h4>Brand :{product.brand}</h4>
            <h4>Category :{product.category}</h4>
            <p>
              <span className="font-bold">Description</span>{product.description}
            </p>
            <h3 className="mt-4 font-bold">Client Reviews</h3>
            {
              product?.reviews?.length>0?
              product?.reviews?.map(item=>(
                <div key={item.date} className="p-2 mb-2 border rounded shadow">
                  <h5>
                    <span className="font-bold">{item?.reviewerName}</span> : <span>{item?.comment}</span>
                  </h5>
                  <p>Rating : {item?.rating} <i className="text-yellow-400 fa-solid fa-star"></i> </p>
                </div>
                
              ))
              :
                <div className="font-bold text-red-600" >No Reviews yet !!</div>
            }
           
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
