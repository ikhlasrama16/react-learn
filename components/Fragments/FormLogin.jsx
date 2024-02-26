import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";
import { useEffect, useRef } from "react";

const FormLogin = (props) =>{
  const handleLogin = (e) =>{
    e.preventDefault()
    localStorage.setItem("email",e.target.email.value)
    localStorage.setItem("password",e.target.password.value)
    window.location.href = "/products"
  }
  const emailRef = useRef("null")
  useEffect(()=>{
    emailRef.current.focus();
  },[])

  return(
    
    <form onSubmit={handleLogin}>
        <InputForm 
        label="Email" 
        name="email" 
        placeholder="Enter your email" 
        type="email"
        ref={emailRef}
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