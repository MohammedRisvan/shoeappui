
import { BsBag } from 'react-icons/bs'
import './App.css'
import { HiShoppingBag } from 'react-icons/hi'
import { MdAccountCircle } from 'react-icons/md'
import Home from './pages/homePage/Home'

function App() {

  return (
    <div>
   <div className='supernav'>
    <p>Free Express Shipping on all orders with all duties included</p>
   </div>
   <div className='nav'>
    <div>
    <h1>PLASHOE</h1>
    <p>MEN</p>
    <p>WOMEN</p>
    <p>COLLECTION</p>
    <p>LOOKBOOK</p>
    <p>SALE</p>
    </div>
    <div>
      <p>OURSTORY</p>
      <p>CONTACT</p>
      <HiShoppingBag className='icon'/>
      <MdAccountCircle className='icon'/>
    </div>

   </div>
   <div className='components'>
   <Home/>
   </div>
    </div>
  )
}

export default App
