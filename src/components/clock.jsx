import React, {Component} from "react";

class Clock extends Component {
    constructor(props) {
        super(props); // >>>>> necessaire to call the parent mathode
        this.state = {date: new Date()};
        this.timer = null;
    }

    getTime = () => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let h = today.getHours();
        if (h < 10) { h = "0" + h }
        let m = today.getMinutes();
        if (m < 10) { m = "0" + m }
        let s = today.getSeconds();
        if (s < 10) { s = "0" + s }
        return  h+":"+m ;
    };

    render() {
        return <div>{this.getTime()}</div>;
    }
}


export default Clock;
