import React from "react";
import ReactDOM from "react-dom";
import Clock from "./components/clock";
import Timer from "./components/timer";
import App from "./components/app-modal";



function displayPomo() {
    return (
        <>
            <Timer />
            <App />
        </>
    );
}

ReactDOM.render(displayPomo(), document.querySelector(".screen"));
ReactDOM.render(<Clock />, document.querySelector(".notifBar__time"));
