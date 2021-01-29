import React from "react";
import ReactDOM from "react-dom";
const Clock = require("./components/clock.js");
const Incrementer = require("./components/incrementer.js");

// class ManualIncrementer extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = { n: 0 }

//     }

//     increment(e) {
//         e.preventDefault()
//         this.setState((state, props) => {
//             return { n: state.n + 1 }
//         })
//     }

//     render() {
//         return <div>Valeur : {this.state.n} <button onClick={this.increment.bind(this)}>Incrémenter</button></div>
//     }
// }

function Home() {
    return (
        <div>
            <Incrementer />
        </div>
    );
}

ReactDOM.render(<Home />, document.querySelector(".screen"));
ReactDOM.render(<Clock />, document.querySelector(".notifBar__time"));
