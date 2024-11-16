import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
      <Header/>
      <div style={{paddingTop:"100px"}} className='px-5'>
      <>
      <h1 className='text-5xl font-bold text-blue-600'>Crat Summary</h1>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="col-span-2 border rounded p-5 shadow">
          <table className="table-auto w-full">
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
              <td>1</td>
              <td>Product Name</td>
              <td><img width={'70px'} height={'70px'} src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" alt="" /></td>
              <td>
                <div className='flex'>
                  <button className='font-bold'>-</button>
                  <input style={{width:"40px"}} type="text" readOnly value={1} className="rounded border p-1 mx-2" />
                  <button className='font-bold'>+</button>
                </div>
              </td>
              <td>$ 250</td>
              <td><button className='text-red-600'><i className="fa-solid fa-trash"></i></button></td>
            </tbody>
          </table>
          <div className="float-right mt-5">
            <button className='bg-red-600 text-white p-2'>EMPTY CART</button>
            <Link to={'/'} className='bg-blue-600 ms-3 text-white p-2'>SHOP MORE</Link>
          </div>
        </div> 
        <div className="col-span-1">
          <div className="border rounded shadow p-5">
            <h2 className="font-bold my-4">Total Amount : <span className='text-red-600'>$ 250</span> </h2>
            <hr />
            <button className='bg-green-600 text-white p-2 text-xl w-full mt-4 '>CHECKOUT</button>
          </div>
        </div>
      </div>
      </>
      </div>
    </>
  )
}

export default Cart
