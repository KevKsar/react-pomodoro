import React, { Component } from "react";

class Incrementer extends Component {
    constructor(props) {
        super(props);
        this.state = { n: props.start, timer: null };
        // this.timer = null
        // this.toggle = this.toggle.bind(this);
        // this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        // window.setInterval(this.increment.bind(this), 1000)
        this.play();
    }

    componentWillUnmount() {
        window.clearInterval(this.timer);
    }

    increment() {
        this.setState((state, props) => ({ n: state.n - props.step }));
    }

    pause() {
        window.clearInterval(this.state.timer);
        this.setState({
            timer: null,
        });
    }

    play() {
        window.clearInterval(this.state.timer);
        this.setState({
            timer: window.setInterval(this.increment.bind(this), 1000)
        });
    }
    reset = () => {
        this.setState((state, props) => ({ n: props.start }));
        this.pause();
    }

    toggle = () => {
        return this.state.timer ? this.pause() : this.play();
    }

    label() {
        return this.state.timer ? "Pause" : "Play";
    }

    render() {
        // const toggle = this.toggle;
        // const reset = this.reset;
        function toMinutesAndSeconds(param) {
            let minutes = Math.floor(param / 60);
            let seconds = ((param % 60) / 1).toFixed(0);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        }
        return (
            <div className={"pomodoro"}>
                {toMinutesAndSeconds(this.state.n)
                }
                {/* {this.state.n} */}
                <button type={"button"} className={"btn"} onClick={this.toggle}>
                    {this.label()}
                </button>
                <button type={"button"} className={"btn"} onClick={this.reset}>
                    Reset
                </button>
            </div>
        );
    }
}

Incrementer.defaultProps = {
    start: 1500,
    step: 1,
};

export default Incrementer;
