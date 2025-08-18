import React from 'react'

const Hello = () => {
    return (
    // with JSX
    // <div> 
    //     <h1>Hello World!</h1> 
    // </div>
    // without JSX

    React.createElement(
        'div', 
        {id : 'hello', className : 'dummyClass'}, 
        React.createElement('h1', null, 'Hello World!!'))
    )
}

export default Hello;