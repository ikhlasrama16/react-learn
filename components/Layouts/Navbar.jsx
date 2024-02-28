import { useEffect, useState } from "react";
import { useLogin } from "../../src/hooks/useLogin"
import Button from "../Elements/Button";
import { useSelector } from "react-redux";

const Navbar =() =>{
  const handleLogout = () =>{
    localStorage.removeItem("token")
    window.location.href = "/login"
  }
  const username = useLogin()
  const cart = useSelector((state) => state.cart.data)
  const [totalCart, setTotalCart] = useState(0)
  useEffect(()=>{
    const sum = cart.reduce((acc, item) =>{
      return acc + item.qty
    }, 0)
    setTotalCart(sum)
  },[cart])

  return (
    <div className="text-medium font-semibold bg-blue-600 text-white p-5 flex justify-end items-center">
      <a href="/profile">{username}</a>
      <Button variant="transition-all duration-300 ease-in-out bg-black text-white hover:bg-white hover:text-blue-600 ml-10" onClick={handleLogout} >Logout</Button>
      <div className="flex items-center ml-5 p-2 rounded-md bg-white text-blue-600">{totalCart}</div>
    </div>
  )
}

export default Navbar