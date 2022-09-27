import React, { Component } from 'react'

export default class ClassBased extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date().toUTCString() };
        this.setData = this.setData.bind(this);
    }

    componentDidMount() {
        console.log('class mount :>> ');

    }


    setData() {
        this.setState({ date: "changed" })
    }

    render() {
        return (
            <div>
                <h2>Class based</h2>
                <p>{this.state.date}</p>
                <button onClick={this.setData}>add</button>
            </div>
        )
    }
}
