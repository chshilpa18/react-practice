import React, {Component} from 'react'

class Counter extends Component {

    constructor(props){

      super(props);

      this.state = {
        count : 0
      }

    }

    //this.state.count = this.state.count + 1; // this will not work and will not render to UI 
    // So we use setState()
    // here the console.log at line 24 executes before setState() because steState is async .
    // So in order to execute something after setState() we need to use callback mthod in setState() method
    // the callback method is an => function

    // When we call incrementFive() on button click, then with this code the count is only increment by 1
    // the reason for that is because React may group multiple setState Calls into a single setState call 
    // for better performance - soo all the setState() calls get executed at once and the updated state
    // does not pass over between the calls.
    // To overcome this - to make updates to previous state - we need pass a method 
    // instead of passing an object as the first parameter to setState() method.
    // this methos takes 'prevState'  and 'props' as two arguments 

    incrementCounter() {
        this.setState(   
            (prevState, props) => ({
                count: prevState.count + 1
            }), 

            () => { 
                    console.log('Callback Value - ' + this.state.count)
                }
        );
        console.log("Not part of call back function - "+ this.state.count)

        // this.setState(
        //      { 
        //          count: this.state.count + 1 
        //      }, 
        //     () => {console.log('Callback Value - ' + this.state.count)}
        // );
        // console.log("Not part of call back function - "+ this.state.count)
    }

    incrementFive(){
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
    }

    render() {
        return (
            <div>
                <div>
                    count - {this.state.count}
                </div>
                <button onClick = {() => this.incrementFive()}>Increment</button>
            </div>
            
        );
    }
}

export default Counter