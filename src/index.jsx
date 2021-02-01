import React from "react";
import ReactDOM from "react-dom";
import Clock from "./components/clock";
import Incrementer from "./components/decrementer";
// import ManualIncrementer from "./components/manual-incrementer.jsx";
import App from "./appModal";


function Home() {
  return <>
    <Incrementer />
    <App />
  </>
}

ReactDOM.render(Home(), document.querySelector(".screen"));
ReactDOM.render(<Clock />, document.querySelector(".notifBar__time"));
