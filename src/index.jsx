import React from "react";
import ReactDOM from "react-dom";
import Clock from "./components/clock.jsx";
import Incrementer from "./components/incrementer.jsx";
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
