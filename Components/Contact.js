import React, { Component} from 'react'


export default class Contact extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = 'green'
    }

    render() {
        return (
            <div>
                <h1> Router App </h1>
                <p> Contact Route</p>
            </div>
        )
    }
}