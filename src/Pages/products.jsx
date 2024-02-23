import { Fragment } from "react"
import CardProduct from "../../components/Fragments/CardProduct"
import Button from "../../components/Elements/Button"

var products = [
  {
    id: 1,
    name: "Shirt",
    image: "assets/images/shirt-1.jpg",
    price: "Rp. 100.000",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quibusdam ullam accusantium nesciunt optio dicta illum quidem aliquid iure labore perferendis, facilis sint iusto laborum neque eveniet deserunt saepe repudiandae quod? Dolorem culpa, optio at incidunt corporis quibusdam laboriosam sint iusto recusandae blanditiis, voluptas fugiat dolores consequatur beatae facere numquam expedita repellendus. Sint illum accusamus sapiente vel reiciendis? Maxime cupiditate laudantium ullam quas magni, inventore veniam nulla praesentium harum quod pariatur repellendus rerum, consectetur neque eligendi doloribus enim. Amet numquam officia vel cum vero ipsam deserunt ratione saepe illo sunt labore earum culpa quasi error delectus accusantium, laudantium laborum! Pariatur"
  },
  {
    id: 2,
    name: "Shoes",
    image: "assets/images/shoes-1.jpg",
    price: "Rp. 300.000",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eveniet, necessitatibus quod pariatur recusandae consequuntur maxime suscipit dignissimos delectus quisquam laborum neque. Culpa quasi corrupti ipsam. Quos nihil culpa minus."
  }
]


const ProductsPage = () =>{
  const email = localStorage.getItem("email")
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
        {products.map((product) =>
        (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image}/>
            <CardProduct.Body title={product.name}>{product.description}</CardProduct.Body>
            <CardProduct.Footer price={product.price}/>
          </CardProduct>
        ))}
      </div>
    </Fragment>
  )
}




export default ProductsPage