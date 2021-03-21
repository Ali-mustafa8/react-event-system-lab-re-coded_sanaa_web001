import React from "react";
export default class kypad extends React.Component{
  
 handlevent=()=>{
    console.log("Entering password");
    
  }
  
  render(){
    <div>
    return(
      <input type="password" onKeyUp={this.keyevent}/>
      
      )
      </div>
      
    
  }
}