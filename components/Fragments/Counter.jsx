import Button from "../Elements/Button";
import React from "react"

class Counter extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        count:0
      }
      console.log("constructor")
    }
    componentDidMount(){
      this.setState({count:10 })
      console.log("componentDidMount")
    }

    componentDidUpdate(prevProps, prevState){
      if(this.state.count === 10){
        this.setState({count: 0})
      }
      console.log("componentDidUpdate")
    }

  render(){
    return(
      <div className="flex items-center">
        <h1 className="text-medium font-semibold px-5">
          {this.state.count}
        </h1>
        <Button onClick={() => this.setState({count: this.state.count + 1})}>+</Button>
        {console.log("render")}
      </div>
      
    )
  }
}

export default Counter