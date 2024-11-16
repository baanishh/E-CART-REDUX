import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishlistSlice'

const Whishlist = () => {
  const dispatch=useDispatch()
  const userWishlist=useSelector(state=>state.whishlistReducer)
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
          <div key={product.id} className='rounded border p-2 shadow'>
          <img width={"100%"} height={'200px'} src={product?.thumbnail} alt="" />
          <div className='text-center'>
              <h3 className='text-xl font-bold'>{product?.title}</h3>
              <div className="mt-3 flex justify-evenly">
                <button className='text-xl' onClick={()=>dispatch(removeItem(product.id))}> <i className="fa-solid fa-heart-circle-xmark text-red-500"></i> </button>
                <button className='text-xl'> <i className="fa-solid fa-cart-plus text-green-700"></i> </button>
              </div>
          </div>
        </div>
        ))
       }
      </div>
    </>
    :
    <div className="flex flex-col justify-center items-center h-screen">
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
