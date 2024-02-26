import { forwardRef } from "react"

const Input = forwardRef((props, ref) =>{
  const{type, placeholder, name} = props
  return(
    <input 
    type={type} 
    className="text-sm w-full p-2 border border-slate-200 rounded-md" 
    placeholder={placeholder}
    name={name}
    id={name} 
    ref={ref}
    />
  )
})

export default Input