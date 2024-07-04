import { useState } from "react"
import "./signup.css"
import { IoMdEye, IoMdEyeOff } from "react-icons/io"

const Signup=()=>{
    const [showPassword,setShowPassword]=useState<string>("password")
    return(
    <div className="Sp">
<div className="Spform">
<h1>SignUp Form</h1>
<label>User Name</label>
<input type="text" placeholder="Enter your name"/>
<label>Email</label>
<input type="text" placeholder="example@gmail.com"/>
<label>Password</label>
<div className="Sppassworddiv">
<input type={showPassword}placeholder="create secure password"/>
{showPassword=="password"?<IoMdEye onClick={()=>{setShowPassword("text")}}/>:<IoMdEyeOff onClick={()=>{setShowPassword("password")}}/>}
</div>
<button>Signup</button>
<a href="login">Login</a>
</div>
    </div>)
}

export default Signup