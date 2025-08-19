import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Chandler"
        }
        console.log("LifeCycleA constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps");
        return null
    }

    componentDidMount(): void {
        console.log("LifeCycleA componentDidMount");

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("LifeCycleA shouldComponentUpdate");
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleA getSnapshotBeforeUpdate");
        return null
    }

    componentDidUpdate() {
        console.log("LifeCycleA componentDidUpdate");
    }
    changeState = () => {
        this.setState({ name: "Ross" })
    }

    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                <div>LifeCycleA</div >
                <button onClick={this.changeState}>Click</button>
                <LifeCycleB />
            </div>

        )
    }
}

export default LifeCycleA
