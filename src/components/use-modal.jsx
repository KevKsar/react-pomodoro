import {useState} from "react";

const useModal = () => {
    //init isShowing state to false &
    //setIsShowing function to change its value with useState hook
    const [isShowing, setIsShowing] = useState(false);

    function toggleModal() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggleModal,
    };
};

export default useModal;
