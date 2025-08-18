import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        {/* Here we are calling Parent function in child component using props */}
        <button onClick = {props.greetHandler}>Greet Parent</button>
        {/* IF we want to pass parameters to Parent component method from child component then we 
       use Arrow function - like below*/}
        <button onClick = {() => props.greetHandler1('child')}>Greet Child</button>
    </div>
  )
}

export default ChildComponent
