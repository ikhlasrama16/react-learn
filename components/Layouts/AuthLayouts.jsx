import { useContext } from "react"
import { Link } from "react-router-dom"
import { DarkMode } from "../../src/context/DarkMode"
import Button from "../Elements/Button"

const AuthLayouts = (props) =>{
  const {children, title, type} = props
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
  {
    console.log(isDarkMode)
  }
  return(
    <div className={`flex justify-center min-h-screen items-center ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white'}`}>
      <div className="w-full max-w-xs">
        <button className="absolute top-2 right-2 bg-blue-500 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="text-medium mb-2 text-slate-600">
          Welcome. Please enter your details.
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  )
}

const Navigation = ({ type }) =>{
  if(type === 'login'){
    return(
      <p className="text-sm mt-4 text-center">Don't have an account? {" "}
          <Link to="/register" className="font-bold text-blue-600">
            Sign up
          </Link>
      </p>
    )}else{
      return(
        <p className="text-sm mt-4 text-center">
          Already have an account? {" "}
          <Link to="/login" className="font-bold text-blue-600">
            Sign in
          </Link>
        </p>
      )
  }
}

export default AuthLayouts