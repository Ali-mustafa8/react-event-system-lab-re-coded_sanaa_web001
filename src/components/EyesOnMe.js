import React from 'react';

export default class EyesOnMe extends React.Component {

  const onFocus=()=>{
    console.log("here we go i'm focus")!
  }

const onBlur=()=>{
    console.log("here we go, i'm onBlur")!
  }
  render() {
    return (
      <button onFocus={this.onFocus} onBlur={this.onBlur}>
        Eyes on me, please!
      </button>
    )
  }
}