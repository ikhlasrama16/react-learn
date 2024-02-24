import { Fragment, useState } from "react"
import CardProduct from "../../components/Fragments/CardProduct"
import Button from "../../components/Elements/Button"
import Counter from "../../components/Fragments/Counter"

var products = [
  {
    id: 1,
    name: "Shirt",
    image: "assets/images/shirt-1.jpg",
    price: 100000,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quibusdam ullam accusantium nesciunt optio dicta illum quidem aliquid iure labore perferendis, facilis sint iusto laborum neque eveniet deserunt saepe repudiandae quod? Dolorem culpa, optio at incidunt corporis quibusdam laboriosam sint iusto recusandae blanditiis, voluptas fugiat dolores consequatur beatae facere numquam expedita repellendus. Sint illum accusamus sapiente vel reiciendis? Maxime cupiditate laudantium ullam quas magni, inventore veniam nulla praesentium harum quod pariatur repellendus rerum, consectetur neque eligendi doloribus enim. Amet numquam officia vel cum vero ipsam deserunt ratione saepe illo sunt labore earum culpa quasi error delectus accusantium, laudantium laborum! Pariatur"
  },
  {
    id: 2,
    name: "Shoes",
    image: "assets/images/shoes-1.jpg",
    price: 300000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eveniet, necessitatibus quod pariatur recusandae consequuntur maxime suscipit dignissimos delectus quisquam laborum neque. Culpa quasi corrupti ipsam. Quos nihil culpa minus."
  },
  {
    id: 3,
    name: "Bag",
    image: "assets/images/bag-1.jpg",
    price: 50000,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, debitis fuga! Esse delectus doloribus suscipit repellat voluptas maxime iusto ducimus qui voluptatibus repellendus molestias necessitatibus ut asperiores saepe distinctio deserunt, mollitia, quisquam aperiam quo. Soluta, dicta! Dicta impedit voluptate necessitatibus."
  },
  
]


const ProductsPage = () =>{
  const email = localStorage.getItem("email")
  
  const [cart, setcart] = useState([
    {
      name:"Shirt",
      id:1,
      qty:1
    }
  ])
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
  
  
  
  const handleLogout = () =>{
    localStorage.removeItem("email", "password")
    window.location.href = "/login"
  }
  return(
    <Fragment>
      <div className="text-medium font-semibold bg-blue-600 text-white p-5 flex justify-end items-center">
        {email}
        <Button variant="transition-all duration-300 ease-in-out bg-black text-white hover:bg-white hover:text-blue-600 ml-10" onClick={handleLogout} >Logout</Button>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-4/6 flex flex-wrap ">
          {products.map((product) =>
          (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image}/>
              <CardProduct.Body title={product.name}>{product.description}</CardProduct.Body>
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
              {cart.map((item) =>{
              const product = products.find((product) => product.id === item.id);
              return(
                <tr key={item.id}>
                  <td>{product.name}</td>
                  <td >{product.price.toLocaleString("id-ID", {style:"currency", currency:"idr"})}</td>
                  <td>{item.qty}</td>
                  <td>{(product.price * item.qty).toLocaleString("id-ID", {style:"currency", currency:"idr"})}</td>
                </tr>
              )
              })}
            </tbody>
          </table>
        </div>
      </div>
      
    </Fragment>
  )
}




export default ProductsPage