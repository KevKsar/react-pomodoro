import React, {Component} from "react";


class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {n: props.start, timer: null};
        this.handleToggle = this.handleToggle.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.labelButton = this.labelButton.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    componentDidMount() {
        this.pause();
    }

    componentWillUnmount() {
        window.clearInterval(this.timer);
    }

    decrement() {
        this.setState((state, props) => ({n: state.n - props.step}));
        this.state.n == 0 ? this.pause() : null;
    }

    pause() {
        window.clearInterval(this.state.timer);
        this.setState({
            timer: null,
        });
    }

    play() {
        window.clearInterval(this.state.timer);
        this.state.n != 0
            ? this.setState({
                timer: window.setInterval(this.decrement.bind(this), 1000),
            })
            : this.handleReset();
    }

    handleReset() {
        this.setState((state, props) => ({n: props.start}));
        this.pause();
    }

    handleToggle() {
        return this.state.timer ? this.pause() : this.play();
    }

    labelButton() {
        return this.state.timer ? (
            <i className={"fas fa-pause"} />
        ) : (
            <i className={"fas fa-play"} />
        );
    }

    handleIncrement(e) {
        e.preventDefault();
        this.setState((state, props) => ({n: state.n + props.step * 60})) 
    }

    handleDecrement(e) {
        e.preventDefault();
        this.state.n >= 59 ?
        this.setState((state, props) => ({n: state.n - props.step * 60}))
        : null
    }

    render() {
        function toMinutesAndSeconds(param) {
            const minutes = Math.floor(param / 60);
            const seconds = ((param % 60) / 1).toFixed(0);
            return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        }
        console.log();
        return (
            <>
                <div className={"pomodoroApp__task"}>{"Your task here"}</div>
                <div className={"pomodoroApp__setTime"}>
                    <button
                        type={"button"}
                        className={"pomodoroApp__setTimeUp"}
                        onClick={
                            this.state.timer == null
                                ? this.handleDecrement
                                : null
                        }>
                        <i className={"fas fa-minus"} />
                    </button>
                    <i className={"fas fa-stopwatch pomodoroApp__stopWatch"} />
                    <button
                        type={"button"}
                        className={"pomodoroApp__setTimeDwn"}
                        onClick={this.handleIncrement}>
                        <i className={"fas fa-plus"} />
                    </button>
                </div>
                <div className={"pomodoroApp__timer"}>
                    {toMinutesAndSeconds(this.state.n)}
                </div>
                <div className={"pomodoroApp__controls"}>
                    <button
                        type={"button"}
                        className={
                            "pomodoroApp__button pomodoroApp__button--playPause"
                        }
                        onClick={this.handleToggle}>
                        {this.labelButton()}
                    </button>
                    <button
                        type={"button"}
                        className={
                            "pomodoroApp__button pomodoroApp__button--stop"
                        }
                        onClick={this.handleReset}>
                        <i className={"fas fa-stop"} />
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
