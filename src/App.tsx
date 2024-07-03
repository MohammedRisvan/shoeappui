
import Home from './pages/homePage/Home'
import Footer, { SpctioalFooter } from './pages/footer/Footer'
import Navbar from './pages/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout/layout'
import MenPage from './pages/men/menpage'
import WomenPage from './pages/women/women'
import Collection from './pages/collection/collection'

function App() {

  return (
    <BrowserRouter>
    <Routes>
   <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/men' element={<MenPage/>}/>
    <Route path='/women'element={<WomenPage/>}/>
    <Route path='/shop' element={<Collection/>}/>
   </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
