import { useEffect, useState } from "react"
import { getUsername } from "../services/auth.services"
export const useLogin = () => {

  const [username, setUsername] = useState([]);
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token === null){
      window.location.href = "/login"
    }else{
      setUsername(getUsername(token)) 
    }
    
  }, []);

  return username
}