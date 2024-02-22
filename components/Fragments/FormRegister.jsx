import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";
const FormRegister = (props) =>{
  return(
    <form action="" className="">
        <InputForm 
        label="Fullname" 
        name="fullname" 
        placeholder="Enter your fullname" 
        type="text" />

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

        <InputForm 
        label="Confirm Password"
        name="Confirm Password"
        placeholder="Re-enter your password"
        type="password"
        />
        <Button variant="bg-blue-600 w-full">Register</Button>
      </form>
  )
}

export default FormRegister