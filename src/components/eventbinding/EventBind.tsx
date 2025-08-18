import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props){
        super(props);
        this.state = {
            message : 'Hello'
        }
        // 3. this.clickHandler = this.clickHandler.bind(this)
    }

    // 1,2,3 qpproach 
    // clickHandler(){
    //     console.log("Goodbye");
    //     this.setState({
    //         message : "Goodbye!"
    //     })
    // }

// 4th approach
    clickHandler = () => {
        console.log(this);
        
        this.setState({
            message: "GoodBye"
        }) 
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick = { () => this.clickHandler()}>Click</button>  no error with this syntex -
                    Arrow functions do not have their own this — they use the this of their enclosing scope.
                    The enclosing scope here is your class component, 
                    so this correctly points to the component instance.
                    Error with below syntex - this keyword is undefined in this case in the evenhandler function
                    Here, you are passing a reference to the method (this.clickHandler) as a callback.
                    When React calls it (e.g. onClick → fn()), it is invoked as a plain function, not as a method of your class.
                    In JavaScript, calling a function like fn() (instead of obj.fn()) means this becomes undefined in strict mode (which React uses).
                    You need to make sure the method is bound to the class instance. You have 3 common options:

                    1. Bind in render method  - Problematic 
                    this appproach will create a new event handler for every change as 
                    each state change will rerender the component.
                            constructor(props) {
                                super(props);
                                this.clickHandler = this.clickHandler.bind(this);
                            }
                
                    2. Use  arrow function - it has performance problem

                    3. bind in constructor 

                    4. use arrow function as a class property

                */}
                 {/* 1. <button onClick = {this.clickHandler.bind(this)}>Click</button>  */}
                 {/* 2. <button onClick = { () => this.clickHandler()}>Click</button> */}
                 {/* 3. <button onClick = {this.clickHandler}>Click</button>  */}

                 {/* 4.  */}
                 <button onClick = {this.clickHandler}>Click</button>

            </div>
        )
    }
}

export default EventBind
