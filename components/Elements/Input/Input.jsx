const Input = (props) =>{
  const{type, placeholder, name} = props
  return(
    <input 
    type={type} 
    className="text-sm w-full p-2 border border-slate-200 rounded-md" 
    placeholder={placeholder}
    name={name}
    id={name} />
  )
}

export default Input