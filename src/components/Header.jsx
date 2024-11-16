import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = ({insideHome}) => {
  const userWishList=useSelector(state=>state.whishlistReducer)
  return (
    <nav className='flex bg-violet-600 fixed w-full p-5 text-white font-bold'>
      <Link to={'/'} className='text-2xl'> 
      <i className="fa-solid fa-truck-fast me-1"></i> Daily Cart
      </Link>
      <ul className='flex-1 text-right'>
        {insideHome && <li className='list-none inline-block px-5'><input style={{width:'300px'}} type="text" placeholder='Search by product here !' className='rounded p-1' /></li>}
        <li className='list-none inline-block px-5'><Link to={'/whishlist'}> <i className="fa-solid fa-heart text-red-600"></i>Whislist <span className='bg-black text-white p-1 rounded'>{userWishList?.length}</span></Link></li>
        <li className='list-none inline-block px-5'><Link to={'/cart'}> <i className="fa-solid fa-cart-plus text-green-600"></i>Cart <span className='bg-black text-white p-1 rounded'>10</span></Link></li>
      </ul>
    </nav>
  )
}

export default Header
