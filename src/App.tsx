
import { BsBag } from 'react-icons/bs'
import './App.css'
import { HiShoppingBag } from 'react-icons/hi'

function App() {

  return (
    <div>
   <div className='supernav'>
    <p>Free Express Shipping on all orders with all duties included</p>
   </div>
   <div className='nav'>
    <div>
    <h1>PLAsHOE</h1>
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
    </div>

   </div>
    </div>
  )
}

export default App
