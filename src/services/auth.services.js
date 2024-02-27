import axios from "axios";
import {jwtDecode} from "jwt-decode";


export const Login =(data, Callback) =>{
  axios
  .post("https://fakestoreapi.com/auth/login", data)
  .then((res)=>{
    Callback(true, res.data.token)
  }).catch((err)=>{
    Callback(false, err)
  })
}


export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user;
};
