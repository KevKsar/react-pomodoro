import React from "react";
import ReactDOM from "react-dom";
import TimerBreak from "./timer-break";

const Modal = ({isShowing, hide}) =>
    isShowing
        ? ReactDOM.createPortal(
            <>
                <div className={"modalWrapper"}>
                    <div className={"modal"}>
                        <button
                            className={"modal__closeButton"}
                            type={"button"}
                            onClick={hide}>
                            <i className={"fas fa-times"} />
                        </button>
                        <TimerBreak/>
                    </div>
                </div>
            </>,
            document.querySelector(".screen"),
        )
        : null;

export default Modal;
