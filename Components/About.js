import React, { Component} from 'react'


export default class About extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = 'goldenrod'
    }

    render() {
        return (
            <div>
                <h1> Router App </h1>
                <p> About Route</p>
            </div>
        )
    }
}