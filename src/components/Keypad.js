import React from "React";
export default class kypad extends React.Component{
  
  const handlevent=()=>{
    console.log("Entering password");
    
  }
  
  render(){
    return(
      <input type="password" onKeyUp={this.keyevent}>
      
      );
    
  }
}