
import Home from './pages/homePage/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout/layout'
import MenPage from './pages/men/menpage'
import WomenPage from './pages/women/women'
import Collection from './pages/collection/collection'
import Signup from './pages/signupAndLogin/signup'
import Login from './pages/signupAndLogin/login'
import AdminLayout from './adminPage/Layout/adminlayout'
import Users from './adminPage/user/users'



function App() {
  return (
    <>
   <BrowserRouter>
    <Routes>
   <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/men' element={<MenPage/>}/>
    <Route path='/women'element={<WomenPage/>}/>
    <Route path='/shop' element={<Collection/>}/>
   </Route>
   <Route path='/Signup' element={<Signup/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/admin'element={<AdminLayout/>}>
    <Route index element={<Users/>}/>
   </Route>
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
