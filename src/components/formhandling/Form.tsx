import React, { Component } from 'react'

export class form extends Component {

    // to conver html form to controlled react component there are 2 steps 
    // 1 . to create a component state that will controll the value of the input element 
    // Assign this state property as a value of the input element.
    // 2. Handelling the onChange event
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }

    // define the method as a class property - event is passed to the envent handler
    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleTextAreaChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleChange = event => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    }


    render() {
        const { username, comments, topic } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={this.handleUserNameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handleTextAreaChange} />
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default form
