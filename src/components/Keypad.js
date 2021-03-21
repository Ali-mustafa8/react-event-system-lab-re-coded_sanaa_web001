import React from "React";
export default class kypad extends React.Component{
  
  const keyUp=()=>{
    console.log("Entering password");
    
  }
  render(){
    return(
      <input type="password" keyUp={this.keyUp}>
      
      )
    
  }
}