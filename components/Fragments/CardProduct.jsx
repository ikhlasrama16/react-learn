import Button from "../Elements/Button"

const CardProduct = (props) =>{
  const {children} = props

  return(
    <div className="w-full max-w-sm bg-blue-700 border-gray-600 border rounded-lg shadow-md mx-2 flex flex-col justify-between">
      {children}
    </div>
  )
}
const Header = (props) =>{
  const {image} = props
  return(
    <a href="#">
      <img 
      className="p-8 rounded-t-lg object-cover h-60 w-96" 
      src={image} 
      alt="shirt" />
    </a>
  )
}

const Body = (props) =>{
  const{children, title} = props
  return(
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
        <p className="text-white text-sm">{children}</p>
      </a>
    </div>
  )
}

const Footer = (props) =>{
  const {price} = props
  return(
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="flex-1 text-3xl font-bold text-white">{price}</span>
      <Button > Add to cart</Button>
    </div>
  )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct