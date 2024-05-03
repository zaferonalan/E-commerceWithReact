import './App.css'
import BannerContent from './components/BannerContent'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Services from './components/Services'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Services/>
      <Product/>
      <BannerContent/>
    </div>
  )
}

export default App
