//Statefull class components -  
// Regular ES6 class that extends from React Component library - 
// must contain a render method -which return html
// maintain state (internal data)- provide lifecycle hooks , complicated ui logic
// container/class/statefull comp
// feature rich

import React, {Component} from 'react'

class Welcome1 extends React.Component {
    render () {
        // destructuring
        const {name, hero} = this.props
        //const { state1, state2} = this.state
        return (
            <div>
                <h1>Welcome {name} a.k.a. {hero}</h1>
            </div>
        )
    }
}

export default Welcome1;