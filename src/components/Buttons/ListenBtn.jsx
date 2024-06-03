import React, { useState, useEffect, useRef } from 'react';

function ListenBtn() {

    const waitTime = 6000;
    const [isActive, setIsActive] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const hasPageBeenRendered = useRef(false);

    let timer = null;

    useEffect(() => {
        if (hasPageBeenRendered.current) {
            timer = setTimeout(() => {
                if (isClicked) {
                    const pulsatingCircle = document.getElementsByClassName("pulsating-circle")[0];
                    pulsatingCircle.classList.toggle("pulsating-circle-animation");
                }
                setIsClicked(false);
            }, waitTime);
        }
        
        hasPageBeenRendered.current = true;

    }, [isActive]);

    const recordAudio = () => {
            // DO SOMETHING
            setIsActive((prevState) => ({isActive: !prevState}));
    }

    const handleClick = () => {
        const pulsatingCircle = document.getElementsByClassName("pulsating-circle")[0];
        pulsatingCircle.classList.toggle("pulsating-circle-animation");
        if (isClicked) {
            setIsClicked(false);
            clearTimeout(timer);
        } else {
            setIsClicked(true);
            recordAudio();
        }
    }

    return (
        <div className="circle-container" onClick={handleClick}>
            <div className="fixed-circle">Listen</div>
            <div className="pulsating-circle"></div>
        </div>
    );
}

export default ListenBtn;