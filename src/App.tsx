
import Home from './pages/homePage/Home'
import Footer, { SpctioalFooter } from './pages/footer/Footer'
import Navbar from './pages/navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
   <div className='components'>
   <Home/>
   </div>
   <SpctioalFooter/>
   <Footer/>
    </div>
  )
}

export default App
