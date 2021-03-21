import React from 'react';

export default class EyesOnMe extends React.Component {

  const onFocus=()=>{
    console.log("Good!");
  }

const onBlur=()=>{
    console.log("Hey! Eyes on me!");
  }
  render() {
    return (
      <button onFocus={this.onFocus} onBlur={this.onBlur}>
        Eyes on me, please!
      </button>
    )
  }
}