// functional components  - js function - return js  - optionally ccepts props as param
// simple - use as much as possible
// recieve props - 
// absence of 'this ' - forced to find solution without using state (older version- now they have state)
// without any complicated logic
// state and hooks can be used in function components as well

import React from "react"

// function Greet(){
//     return <h1> Hello Chad</h1>
// }

// props are immutable

const Greet = props => {
    console.log(props);
    return (
        <div>
            <h1> Hello {props.name} a.k.a. {props.hero}</h1>
            {props.children}
        </div>
    )
}

export default Greet;

// propes are passed to cpmponents - 
// function parameters
// Immutable
// props functional components 
// this.props class components

// state is managed within the component body - variables declared in function body
// state can be changed
// useState Hook - function components
// this.state - Class components