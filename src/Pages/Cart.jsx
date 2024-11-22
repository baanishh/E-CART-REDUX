import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeItemCart } from '../redux/slices/cartSlice'

const Cart = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const userCart=useSelector(state=>state.cartReducer)
  const [cart,setCart]=useState(0)
  
  useEffect(()=>{
    setCart(userCart?.map(item=>item.totalPrice).reduce((a,b)=>a+b))
  },[cart])  
  
  const handleDecrementQuantity=(product)=>{
    if(product?.quantity>1){
      dispatch(decrementQuantity(product?.id))
    }else{
      dispatch(removeItemCart(product?.id))
    }
  }

  const checkout=()=>{
    dispatch(emptyCart())
    alert("Thank You For Shopping With Us")
    navigate('/')
  }

  return (
    <>
      <Header/>
      <div style={{paddingTop:"100px"}} className='px-5'>
     {userCart?.length>0 ?
      
     <>
      <h1 className='text-5xl font-bold text-blue-600'>Crat Summary</h1>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="col-span-2 p-5 border rounded shadow">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <td className="font-semibold">#</td>
                <td className="font-semibold">Name</td>
                <td className="font-semibold">Image</td>
                <td className="font-semibold">Quantity</td>
                <td className="font-semibold">Price</td>
                <td className="font-semibold">...</td>
              </tr>
            </thead>
            <tbody>
             
             {userCart?.map((product,index)=>(
                   <tr key={index}>
                 <td>{index+1}</td>
                 <td>{product?.title}</td>
                <td><img width={'70px'} height={'70px'} src={product?.thumbnail}/></td>
                <td>
                  <div className='flex'>
                    <button className='font-bold' onClick={()=>handleDecrementQuantity(product)} >-</button>
                    <input style={{width:"40px"}} type="text" readOnly value={product.quantity} className="p-1 mx-2 border rounded" />
                    <button className='font-bold' onClick={()=>dispatch(incrementQuantity(product?.id))}>+</button>
                  </div>
                </td>
                <td>{product.totalPrice}</td>
                <td><button className='text-red-600' onClick={()=>dispatch(removeItemCart(product?.id))}><i className="fa-solid fa-trash"></i></button></td>
                </tr>
             )) 
             
             }
            </tbody>
          </table>
          <div className="float-right mt-5">
            <button className='p-2 text-white bg-red-600' onClick={()=>dispatch(emptyCart())}>EMPTY CART</button>
            <Link to={'/'} className='p-2 text-white bg-blue-600 ms-3'>SHOP MORE</Link>
          </div>
        </div> 
        <div className="col-span-1">
          <div className="p-5 border rounded shadow">
            <h2 className="my-4 font-bold">Total Amount : <span className='text-red-600'>$ {cart}  
            </span> </h2>
            <hr />
            <button className='w-full p-2 mt-4 text-xl text-white bg-green-600 ' onClick={checkout}>CHECKOUT</button>
          </div>
        </div>
      </div>
      </>
      :
      <div className="flex flex-col items-center justify-center h-screen">
      <img src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="" />
      <h1 className='text-3xl text-red-600'>
        You Cart Is Empty!!
      </h1>
    </div>}
      </div>
    </>
  )
}

export default Cart
