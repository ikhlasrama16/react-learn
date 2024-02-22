import AuthLayouts from "../../components/Layouts/AuthLayouts"
import FormLogin from "../../components/Fragments/FormLogin"


const LoginPage = (props) =>{
  return(
    
    <AuthLayouts
    title="Login"
    type="login">
      <FormLogin
      />
    </AuthLayouts>

  )
}

export default LoginPage