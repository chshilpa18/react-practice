import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName :"Parent"
      }
      this.greetParent = this.greetParent.bind(this);
    }
    
    greetParent(){
        alert(`Hello ${this.state.parentName}`)
    }

    // Recieving parameter from child component
    greetChild(childName){
        alert(`Hello ${childName}`)
    }

    render() {
      return (
        <div>
          {/* Here we are passing ,method reference as props to child component 
          we are passing two method reference one from calling greetParent
          and other for calling greetChild with parameters */}
            <ChildComponent greetHandler = {this.greetParent} greetHandler1 = {this.greetChild}/>
        </div>
      )
    }
}

export default ParentComponent
