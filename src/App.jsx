import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Whishlist from './Pages/Whishlist'
import Cart from './Pages/Cart'
import View from './Pages/View'
import Pnf from './Pages/Pnf'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/whishlist' element={<Whishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/:id/view' element={<View/>}/>
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
