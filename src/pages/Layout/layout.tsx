import { Outlet } from "react-router-dom";
import { SpctioalFooter } from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout=()=>{
    return(
    <div>
        <Navbar/>
        <Outlet/>
        <SpctioalFooter/>
    </div>
    )
};
export default Layout