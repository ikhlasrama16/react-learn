import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import {Login} from "../../src/services/auth.services";

const FormLogin = (props) =>{
  const [loginFailed, setloginFailed] = useState("");
  const handleLogin = (e) =>{
    e.preventDefault()
    // localStorage.setItem("email",e.target.email.value)
    // localStorage.setItem("password",e.target.password.value)

    const data = {
      username : e.target.username.value,
      password : e.target.password.value,
    }
    Login(data, (status, res) =>{
      if(status){
        localStorage.setItem("token", res)
        window.location.href = "/products"
      }else{
        setloginFailed(res.response.data)
        console.log(res.response.data)
      }
    });

  }
  const usernameRef = useRef("null")
  useEffect(()=>{
    usernameRef.current.focus();
  },[])

  return(
    
    <form onSubmit={handleLogin}>
      {loginFailed && <p className="text-red-500"><b>{loginFailed}</b></p>}
        <InputForm 
        label="Username" 
        name="username" 
        placeholder="Enter your username" 
        type="text"
        ref={usernameRef}
        />

        <InputForm 
        label="Password"
        name="password"
        placeholder="Enter your password"
        type="password"
        />
        <Button variant="bg-blue-600 w-full" type="submit">Login</Button>
      </form>
  )
}

export default FormLogin