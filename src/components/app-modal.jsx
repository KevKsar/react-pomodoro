import React from "react";
import useModal from "./use-modal";
import Modal from "./modal";

const App = () => {
    const {isShowing, toggleModal} = useModal();
    return (
        <>
            <div className={"appModal"}>
                <button
                    type={"button"}
                    className={"appModal__openButton"}
                    onClick={toggleModal}>
                    <i className={"fas fa-mug-hot appModal__coffee"} />
                </button>
                <Modal isShowing={isShowing} hide={toggleModal} />
            </div>
        </>
    );
};

export default App;
