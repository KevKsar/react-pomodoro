import React, { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { n: props.start, timer: null };
        // this.timer = null
        // this.toggle = this.toggle.bind(this);
        // this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        // window.setInterval(this.decrement.bind(this), 1000)
        this.pause();
    }

    componentWillUnmount() {
        window.clearInterval(this.timer);
    }

    decrement = () => {
        this.setState((state, props) => ({ n: state.n - props.step }));
    }

    pause = () => {
        window.clearInterval(this.state.timer);
        this.setState({
            timer: null,
        });
    }

    play = () => {
        window.clearInterval(this.state.timer);
        this.setState({
            timer: window.setInterval(this.decrement.bind(this), 1000)
        });
    }
    reset = () => {
        this.setState((state, props) => ({ n: props.start }));
        this.pause();
    }

    endTimer = () => {

    }

    toggle = () => {
        return this.state.timer ? this.pause() : this.play();
    }

    labelButton = () => this.state.timer ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>;

    manIncrement = (e) => {
        e.preventDefault()
        this.setState((state, props) => ({ n: state.n + props.step * 60 }));
    }

    manDecrement = (e) => {
        //disallow the default behavior
        e.preventDefault()
        this.setState((state, props) => ({ n: state.n - props.step * 60 }));
    }

    toMinutesAndSeconds = (param) => {
        let minutes = Math.floor(param / 60);
        let seconds = ((param % 60) / 1).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    render() {
        return (
            <>
                <div className="pomodoroApp__task">Your task here</div>
                <div className="pomodoroApp__setTime">
                    <button className="pomodoroApp__setTimeUp" onClick={this.state.timer == null ? this.manDecrement : null}> <i className="fas fa-minus"></i> </button>
                    <i className="fas fa-stopwatch pomodoroApp__stopWatch"></i>
                    <button className="pomodoroApp__setTimeDwn" onClick={this.manIncrement}> <i className="fas fa-plus"></i> </button>
                </div>
                <div className="pomodoroApp__timer">{this.toMinutesAndSeconds(this.state.n)}</div>
                <div className="pomodoroApp__controls">
                    <button type={"button"} className="pomodoroApp__button pomodoroApp__button--playPause" onClick={this.toggle}>
                        {this.labelButton()}
                    </button>
                    <button type={"button"} className="pomodoroApp__button pomodoroApp__button--stop" onClick={this.reset}>
                        <i className="fas fa-stop"></i>
                    </button>
                </div>
            </>
        );
    }
}

Timer.defaultProps = {
    start: 1500,
    step: 1,
};

export default Timer;
