import { Fragment, useEffect, useState, useRef } from "react"
import CardProduct from "../../components/Fragments/CardProduct"
import Button from "../../components/Elements/Button"
import {getProdudcts} from "../services/product.services"
import { useLogin } from "../hooks/useLogin"

const ProductsPage = () =>{
  const username = useLogin()
  const [cart, setcart] = useState([])
  const[totalPrice, setTotalPrice] = useState(0)
  const[products, setProducts] = useState([])

  
  useEffect(()=>{
    setcart(JSON.parse(localStorage.getItem("cart")) || [])
  }, [])
  


  useEffect(()=>{
    getProdudcts((data)=>{
      console.log(data)
      setProducts(data) 
    })
  }, [])



  useEffect(()=>{
    if(cart.length > 0){
      const sum = products.length > 0 && cart.reduce((acc, item) =>{
        const product = products.find(product => product.id === item.id)
        return acc + (product.price * item.qty)
      }, 0)
      setTotalPrice(sum)
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart])
  const handleAddtoCart = (id) =>{

    if(cart.find(item => item.id === id)){
      setcart(cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item))
    }else{
      setcart([...cart, {
        id,
        qty:1
      }])
    }
  }

  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || [])


  const handleAddtoCartRef= (id) =>{
    cartRef.current = [...cartRef.current, {
      id,
      qty:1
    }]
    localStorage.setItem("cart", JSON.stringify(cartRef.current))
  }
  
const totalPriceRef = useRef(null);
useEffect(()=>{
  if(cart.length > 0){
    totalPriceRef.current.style.display = "table-row"
  }else{
    totalPriceRef.current.style.display = "none"
  }
}, [cart]);
  
  const handleLogout = () =>{
    localStorage.removeItem("token")
    window.location.href = "/login"
  }
  return(
    <Fragment>
      <div className="text-medium font-semibold bg-blue-600 text-white p-5 flex justify-end items-center">
        <a href="/profile">{username}</a>
        
        <Button variant="transition-all duration-300 ease-in-out bg-black text-white hover:bg-white hover:text-blue-600 ml-10" onClick={handleLogout} >Logout</Button>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-4/6 flex flex-wrap ">
          {products.length > 0 && 
          products.map((product) =>
          (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} id={product.id}/>
              <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
              <CardProduct.Footer 
              price={product.price} 
              id={product.id}
              handleAddtoCart={handleAddtoCart}/>
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-semibold text-blue-600 ">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-2">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody className="font-semibold">
              {products.length > 0 && 
              cart.map((item) =>{
              const product = products.find((product) => product.id === item.id);
              return(
                <tr key={item.id}>
                  <td>{product.title.substring(0, 10)}...</td>
                  <td >{product.price.toLocaleString("id-ID", {style:"currency", currency:"usd"})}</td>
                  <td>{item.qty}</td>
                  <td>{(product.price * item.qty).toLocaleString("id-ID", {style:"currency", currency:"usd", minimumFractionDigits:0})}</td>
                </tr>
              )
              })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  {totalPrice.toLocaleString("id-ID", {style:"currency", currency:"usd"})}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  )
}




export default ProductsPage