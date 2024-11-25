import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice.js'

const Home = () => {
  const dispatch=useDispatch()
 const {allProducts,isLoading,errMsg}= useSelector(state=>state.productReducer)
 //pagination

 const [currentPage,setCurrentPage]=useState(1)
 const productsPerPage=8
 const totalPages=Math.ceil(allProducts?.length / productsPerPage)
 const currentPageLastIndex=currentPage * productsPerPage
 const currentPageFirstIndex=currentPageLastIndex - productsPerPage
 const visibleArray=allProducts?.slice(currentPageFirstIndex,currentPageLastIndex)

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  console.log(allProducts,isLoading,errMsg);

  const navigateToNextPage=()=>{
    if(currentPage != totalPages){
      setCurrentPage(currentPage+1)
    }
  }

  const navigateToPreviousPage=()=>{
    if(currentPage != 1){
      setCurrentPage(currentPage-1)
    }
  }
  
  return (
    <>
      <Header insideHome={true}/>
      
      <div style={{paddingTop:"100px"}} className='container px-4 mx-auto'>
       {
       isLoading? 
       <div role="status" className='flex gap-3 flex-col justify-center items-center text-lg'>
           <svg aria-hidden="true" className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
               <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
           </svg>
           <h1>Loading...</h1>
       </div>
       :
       <>
        <div className='grid grid-cols-4 gap-4'>
        {
          allProducts?.length>0?
          visibleArray?.map(products=>(
            <div key={products.id} className='rounded border p-2 shadow'>
            <img width={"100%"} height={'200px'} src={products.thumbnail} alt="" />
            <div className='text-center'>
                <h3 className='text-xl font-bold'>{products.title}</h3>
                <Link to={`/${products.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>view more</Link>
            </div>
            </div>
          ))
       
        :
        <div className='flex justify-center items-center text-red-600 text-lg'>
          <h1>Priduct not found !!</h1>
        </div>
        }
        </div>
        <div className="text-2xl text-center font-bold mt-20">
          <span className='cursor-pointer' onClick={navigateToPreviousPage}> <i className="fa-solid fa-backward me-5"></i></span>
          <span className='cursor-pointer'>{currentPage} of {totalPages}</span>
          <span className='cursor-pointer' onClick={navigateToNextPage}> <i className="fa-solid fa-forward ms-5"></i></span>
        </div>
        </>}
      </div>
    </>
  )
}

export default Home
