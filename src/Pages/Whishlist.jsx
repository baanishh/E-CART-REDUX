import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const Whishlist = () => {
  const dispatch=useDispatch()
  const userCart=useSelector(state=>state.cartReducer)
  const userWishlist=useSelector(state=>state.whishlistReducer)
  
  
  const handleCart=(product)=>{
    dispatch(removeItem(product.id))
    dispatch(addToCart(product))
    const existing=userCart?.find(item=>item?.id==product.id)
    if(existing){
      alert("Product Quantity Increased")
    }else{
      alert("Item added  to cart successfully")
    }
  }
  
  
  return (
    <>
    <Header/>
    <div style={{paddingTop:"100px"}} className='px-5'>
     {
      userWishlist?.length>0?
      <>
      <h1 className='text-4xl font-bold text-red-400'>My Whishlist</h1>
      <div className='grid grid-cols-4 gap-4 mt-5'>
       {
        userWishlist?.map(product=>(
          <div key={product.id} className='p-2 border rounded shadow'>
          <img width={"100%"} height={'200px'} src={product?.thumbnail} alt="" />
          <div className='text-center'>
              <h3 className='text-xl font-bold'>{product?.title}</h3>
              <div className="flex mt-3 justify-evenly">
                <button className='text-xl' onClick={()=>dispatch(removeItem(product.id))}> <i className="text-red-500 fa-solid fa-heart-circle-xmark"></i> </button>
                <button className='text-xl' onClick={()=>handleCart(product)}> <i className="text-green-700 fa-solid fa-cart-plus"></i> </button>
              </div>
          </div>
        </div>
        ))
       }
      </div>
    </>
    :
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="" />
      <h1 className='text-3xl text-red-600'>
        You WishList Is Empty!!
      </h1>
    </div>
     }
    </div>
      Whishlist
    </>
  )
}

export default Whishlist
