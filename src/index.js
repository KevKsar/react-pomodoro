import React from "react";
import ReactDOM from "react-dom";
import Clock from "./components/clock.js";
import Incrementer from "./components/incrementer.js";
// import ManualIncrementer from "./components/manual-incrementer.js"

function Home() {
    return (
        <div>
            <Incrementer />
        </div>
    );
}

ReactDOM.render(<Home />, document.querySelector(".screen"));
ReactDOM.render(<Clock />, document.querySelector(".notifBar__time"));
