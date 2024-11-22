import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'

const Header = ({insideHome}) => {
  const dispatch=useDispatch()
  const userWishList=useSelector(state=>state.whishlistReducer)
  const usewCart=useSelector(state=>state.cartReducer)
  return (
    <nav className='fixed flex w-full p-5 font-bold text-white bg-violet-600'>
      <Link to={'/'} className='text-2xl'> 
      <i className="fa-solid fa-truck-fast me-1"></i> Daily Cart
      </Link>
      <ul className='flex-1 text-right'>
        {insideHome && <li className='inline-block px-5 list-none'><input style={{width:'300px'}} type="text" placeholder='Search by product here !' onChange={(e)=>dispatch(searchProduct(e.target.value.toLocaleLowerCase()))} className='p-1 rounded text-black' /></li>}
        <li className='inline-block px-5 list-none'><Link to={'/whishlist'}> <i className="text-red-600 fa-solid fa-heart"></i>Whislist <span className='p-1 text-white bg-black rounded'>{userWishList?.length}</span></Link></li>
        <li className='inline-block px-5 list-none'><Link to={'/cart'}> <i className="text-green-600 fa-solid fa-cart-plus"></i>Cart <span className='p-1 text-white bg-black rounded'>{usewCart?.length}</span></Link></li>
      </ul>
    </nav>
  )
}

export default Header
