import CardProduct from "../../components/Fragments/CardProduct"

const ProductsPage = () =>{
  
  return(
    <div className="flex justify-center mt-10">
      <CardProduct>
        <CardProduct.Header image="assets/images/shirt-1.jpg"/>
        <CardProduct.Body title="Shirt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quibusdam ullam accusantium nesciunt optio dicta illum quidem aliquid iure labore perferendis, facilis sint iusto laborum neque eveniet deserunt saepe repudiandae quod? Dolorem culpa, optio at incidunt corporis quibusdam laboriosam sint iusto recusandae blanditiis, voluptas fugiat dolores consequatur beatae facere numquam expedita repellendus. Sint illum accusamus sapiente vel reiciendis? Maxime cupiditate laudantium ullam quas magni, inventore veniam nulla praesentium harum quod pariatur repellendus rerum, consectetur neque eligendi doloribus enim. Amet numquam officia vel cum vero ipsam deserunt ratione saepe illo sunt labore earum culpa quasi error delectus accusantium, laudantium laborum! Pariatur.</CardProduct.Body>
        <CardProduct.Footer price="Rp. 100.000"/>
      </CardProduct>
    </div>
  )
}




export default ProductsPage