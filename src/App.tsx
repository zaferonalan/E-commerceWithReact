import { useState } from 'react'
import './App.css'
import BannerContent from './components/BannerContent'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Services from './components/Services'
import Cart from './components/Cart'

function App() {

  const [openCart, setOpenCart] = useState(false)

  return (
    <div className="App">
      <Navbar setOpenCart= {setOpenCart}/>
      {openCart && <Cart setOpenCart = {setOpenCart} />}
      <Home/>
      <Services/>
      <Product/>
      <BannerContent/>
    </div>
  )
}

export default App
