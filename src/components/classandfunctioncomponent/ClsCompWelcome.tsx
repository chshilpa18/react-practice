//Statefull class components -  
// Regular ES6 class that extends from React Component library - 
// must contain a render method -which return html
// maintain state (internal data)- provide lifecycle hooks , complicated ui logic
// container/class/statefull comp
// feature rich

import React, {Component} from 'react'

class Welcome extends React.Component {

constructor(props){
    super(props);

    this.state = {
        //set state data here
        //count : 0
    }
}
    render () {
        return (
            <div>
                <h1>Welcome {this.props.name} a.k.a. {this.props.hero}</h1>
            </div>
        )
    }
}

export default Welcome;