import { useState } from "react"
import "./login.css"
import { IoMdEye, IoMdEyeOff } from "react-icons/io"

const Login=()=>{
    const [showPassword,setShowPassword]=useState<string>("password")
    return(
        <div className="Si">
    <div className="Siform">
    <h1>SignIn Form</h1>
    <label>User Name</label>
    <input type="text" placeholder="Enter your name"/>
    <label>Password</label>
    <div className="Sipassworddiv">
    <input type={showPassword}placeholder="create secure password"/>
    {showPassword=="password"?<IoMdEye onClick={()=>{setShowPassword("text")}}/>:<IoMdEyeOff onClick={()=>{setShowPassword("password")}}/>}
    </div>
    <button>SignIn</button>
    <p>
        <a href="signup">create new account</a>
        </p>
    </div>
        </div>)
}

export default Login