import './App.css'
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
    </div>
  )
}

export default App
