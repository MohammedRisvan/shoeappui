import { Outlet } from "react-router-dom"
import AdminSaidbar from "../saidbar/saidbar"
import "./layout.css"

const AdminLayout=()=>{
    return(
        <div className="ADl">
            <div className="ADlsaidbar">
            <AdminSaidbar />
            </div>
            <div className="ADloutlet">
            <Outlet/>
            </div>
        </div>
    )
}
export default AdminLayout