import React, { useState, useEffect, useRef } from "react";

import MusicListBtn from "../../assets/musicListBtn.svg";

import CloseMatchContainer from "./CloseMatchContainer";
import MatchContainer from "./MatchContainer";
import MusicDrawer from "./MusicDrawer";
import NoMatchFound from "./NoMatchFound";
import SubHeading from "../SubHeading";

import ListenBtn from "../Buttons/ListenBtn";

// BUG: If the user navigate to other page when the timer is alive, then it causes the timer to malfunction.
// SOLUTION: Create a custom hook to detect the navigation and kill the timer just before navigation.

function MainApp() {

    const [isSongFetched, setIsSongFetched] = useState(null);

    const handleMusicListBtnClick = () => {
        const musicDrawerHandle = document.getElementsByClassName("music-drawer")[0];
        musicDrawerHandle.classList.toggle("hide");
    };

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
                if(!isSongFetched) {}
                setIsSongFetched(false); // Can be false or true based on the fetch result
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
        <>
            <div className="mainapp-container">
                <SubHeading />
                <div className="handleClick-listen-div" onClick={handleClick}><ListenBtn /></div>
                {/* <MatchContainer songName="Attention" songSinger="Charlie Puth" matchPercentage="99%" songThumbnailSrc /> */}
                <NoMatchFound fetchStatus={ hasPageBeenRendered.current ? isSongFetched: null} />
                {/* <CloseMatchContainer /> */}
                
            </div>
            <img className="music-list-btn" onClick={handleMusicListBtnClick} src={MusicListBtn} />
            <MusicDrawer />
        </>
    );
}

export default MainApp;