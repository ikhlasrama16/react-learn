import { Link } from "react-router-dom"
import Button from "../Elements/Button"
import { useDispatch } from "react-redux"
import { addToCart } from "../../src/redux/slices/cartSlice"


const CardProduct = (props) =>{
  const {children} = props

  return(
    <div className="w-full max-w-sm bg-blue-700 border-gray-600 border rounded-lg shadow-md mx-4 my-2 flex flex-col justify-between">
      {children}
    </div>
  )
}
const Header = (props) =>{
  const {image, id} = props
  return(
    <Link to={`/product/${id}`}>
      <img 
      className="p-8 rounded-t-lg object-cover h-60 w-96 hover:zoom-in" 
      src={image} 
      alt="shirt" />
    </Link>
  )
}

const Body = (props) =>{
  const{children, title} = props
  return(
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">{title.substring(0, 20)}...</h5>
        <p className="text-white text-sm">{children.substring(0, 100)}...</p>
      </a>
    </div>
  )
}

const Footer = (props) =>{
  const dispatch = useDispatch()
  const {price, id} = props
  return(
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="flex-1 text-3xl font-bold text-white">
        {price.toLocaleString("id-ID", {style:"currency", currency:"usd"})}
      </span>
      <Button 
      variant="transition-all duration-300 ease-in-out bg-black text-white hover:bg-white hover:text-blue-600"
      onClick={() => dispatch(addToCart({id, qty: 1})) }> 
        Add to cart
      </Button>
    </div>
  )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct