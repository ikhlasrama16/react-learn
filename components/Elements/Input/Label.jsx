const Label = (props) =>{
  const {htmlFor, children} = props
  return(
    <label 
    htmlFor={htmlFor} 
    className="block text-slate-70 font-medium">{children}</label>
  )
}
export default Label