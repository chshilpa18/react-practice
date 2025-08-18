import React from 'react'


// one way to destructure props in function argument, other in method body
// const Greet = ({ name, hero }) => {
const Greet = props => { 
    const {name, hero} = props;
    return (
        <div>
            <h1> Hello {name} a.k.a. {hero}</h1>
        </div>
    )
}

export default Greet;