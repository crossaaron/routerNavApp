import React, { Component} from 'react'


export default class Home extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = 'skyblue'
    }
    render() {
        return (
            <div>
                <h1> Router App </h1>
                <p> Here's where the magic happens</p>
            </div>
        )
    }
}