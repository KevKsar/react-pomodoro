import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isShowing, hide }) =>
  isShowing ?
    ReactDOM.createPortal(
      <>
          <div className="modalWrapper">
            <div className="modal">
              <button className="modal__closeButton" type='button' onClick={hide}>
                <i className="fas fa-times"></i>
              </button>
              <div className="modal__Header">
                <div className="modal__title">Break ends in:</div>
              </div>
              <div className="modal__body">
                <div className="modal__timer">00:00</div>
              </div>
              <button className="modal__startButton" type='button'>
                <span>Start</span>
              </button>
            </div>
          </div>
      </>,
      document.querySelector('.screen')
    )
    : null

export default Modal