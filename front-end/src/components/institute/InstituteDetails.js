import React, { Component } from 'react'

export default class InstituteDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {id: props.match.params.id}
    }
    render() {
        return (
            <div className="dashboard container">
                <h2>Profile</h2>
                <h4>ID: {this.state.id}</h4>
                <h4>Name:</h4>
                <h4>Address:</h4>
            </div>
        )
    }
}
