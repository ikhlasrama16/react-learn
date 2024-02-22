import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";
const FormLogin = (props) =>{
  return(
    <form action="" className="">
        <InputForm 
        label="Email" 
        name="email" 
        placeholder="Enter your email" 
        type="email" />

        <InputForm 
        label="Password"
        name="password"
        placeholder="Enter your password"
        type="password"
        />
        <Button variant="bg-blue-600 w-full">Login</Button>
      </form>
  )
}

export default FormLogin