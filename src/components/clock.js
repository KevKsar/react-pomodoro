import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props); // >>>>> necessaire to call the parent mathode
        this.state = {date: new Date()};
        this.timer = null;
    }

    componentDidMount() {
        this.timer = window.setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        window.clearInterval(this.timer);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return <div>{this.state.date.toLocaleTimeString()}</div>;
    }
}

module.exports = Clock;
