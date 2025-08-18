import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn : true
    }
  }
  
  render() {
    let message 
    // 1. Ternary Optr - preferred
    //return this.state.isLoggedIn ? <div>Welcome Chandler</div> :<div>Welcome Guest</div>

    // 2. Short Circuit operator - preferred
    return this.state.isLoggedIn && <div>Welcome Chandler</div>

    // 3.
    // if(this.state.isLoggedIn) {
    //     message = <div>Welcome Chandler</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    // 4.
    // if(this.state.isLoggedIn) {
    //     return <div>Welcome Chandler</div>
    // } else {
    //     return <div>Welcome Guest</div>
    // }
    }
}

export default UserGreeting
