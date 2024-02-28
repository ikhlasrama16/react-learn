import { Fragment, useEffect, useState, useContext } from "react"
import CardProduct from "../../components/Fragments/CardProduct"
import {getProdudcts} from "../services/product.services"
import { useLogin } from "../hooks/useLogin"
import TableCart from "../../components/Fragments/TableCart"
import Navbar from "../../components/Layouts/Navbar"
import { DarkMode } from "../../src/context/DarkMode"

const ProductsPage = () =>{
  useLogin()
  const[products, setProducts] = useState([])

  useEffect(()=>{
    getProdudcts((data)=>{
      setProducts(data) 
    })
  }, [])
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
  return(
    <Fragment>
      <Navbar></Navbar>
      <div className={`flex justify-center py-10 ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white'}`}>
        <div className="w-4/6 flex flex-wrap ">
          {products.length > 0 && 
          products.map((product) =>
          (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} id={product.id}/>
              <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
              <CardProduct.Footer 
              price={product.price} 
              id={product.id}/>
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-semibold text-blue-600 ">Cart</h1>
          <TableCart products={products}/>
        </div>
      </div>
    </Fragment>
  )
}




export default ProductsPage