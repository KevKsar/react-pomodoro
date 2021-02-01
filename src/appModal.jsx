import React from "react";
import useModal from "./components/useModal";
import Modal from "./components/modal";

export default function App() {
  const { isShowing, toggleModal } = useModal();

  return (
    <>
      <div className="appModal">
        <button className="appModal__openButton" onClick={toggleModal}>
        <i className="fas fa-mug-hot appModal__coffee"></i>
        </button>
        <Modal isShowing={isShowing} hide={toggleModal} />
      </div>
    </>
  );
}