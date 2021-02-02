import React, {Component} from "react";

class TimerBreak extends Component {
    constructor(props) {
        super(props);
        this.state = {n: props.start, timerBreak: null};
        this.handleToggle = this.handleToggle.bind(this);
        this.titleModal = this.titleModal.bind(this);
    }

    componentDidMount() {
        this.pause();
    }

    componentWillUnmount() {
        window.clearInterval(this.timerBreak);
    }

    decrement() {
        this.setState((state, props) => ({n: state.n - props.step}));
        this.state.n == 0 ? this.pause() : null;
    }

    pause() {
        window.clearInterval(this.state.timerBreak);
        this.setState({
            timerBreak: null,
        });
    }

    play() {
        window.clearInterval(this.state.timerBreak);
        this.state.n != 0
            ? this.setState({
                  timerBreak: window.setInterval(
                      this.decrement.bind(this),
                      1000,
                  ),
              })
            : this.handleReset();
    }

    handleReset() {
        this.setState((state, props) => ({n: props.start}));
        this.pause();
    }

    handleToggle() {
        return this.state.timerBreak ? this.pause() : this.play();
    }

    labelButton() {
        return this.state.timerBreak ? (
            <i className={"fas fa-pause"} />
        ) : (
            <i className={"fas fa-play"} />
        );
    }

    titleModal() {
        return this.state.timerBreak ? (
            <div className="modal__title">{"Break ends in:"}</div>
        ) : (
            <div className="modal__title">{"Start your break"}</div>
        );
    }

    render() {
        function toMinutesAndSeconds(param) {
            const minutes = Math.floor(param / 60);
            const seconds = ((param % 60) / 1).toFixed(0);
            return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        }
        return (
            <>
                <div className={"modal__Header"}>
                    <div className={"modal__title"}>{this.titleModal()}</div>
                </div>
                <div className={"modal__body"}>
                    <div className={"modal__timer"}>{toMinutesAndSeconds(this.state.n)}</div>
                </div>
                <button className={"modal__startButton"} type={"button"}
                onClick={this.handleToggle}>
                    <span>{this.labelButton()}</span>
                </button>
            </>
        );
    }
}

TimerBreak.defaultProps = {
    start: 300,
    step: 1,
};

export default TimerBreak;
