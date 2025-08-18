import React, { Component } from 'react'

 class ClsClick extends Component {
    eventHandler() {
        console.log("Class button Clicked"); 
    }

  render() {
    return (
      <div>
        <button onClick = { () => this.eventHandler()}>Class Button</button>
      </div>
    )
  }
}

export default ClsClick
