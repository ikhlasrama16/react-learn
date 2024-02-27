import axios from "axios";

export const getProdudcts = (callback) => {
  axios
  .get("https://fakestoreapi.com/products")
  .then((res) => {
    callback(res.data)
  })
  .catch((err) => {
    console.log(err)
  })
}

