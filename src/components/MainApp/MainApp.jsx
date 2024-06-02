import React from "react";

import SubHeading from "../SubHeading";

import MusicListBtn from "../../assets/musicListBtn.svg";
import MusicDrawer from "./MusicDrawer";

function MainApp() {

    const handleMusicListBtnClick = () => {
        const musicDrawerHandle = document.getElementsByClassName("music-drawer")[0];
        musicDrawerHandle.classList.toggle("hide");
    };

    return (
        <>
            <div className="mainapp-container">
                <SubHeading />
            </div>
            <img className="music-list-btn" onClick={handleMusicListBtnClick} src={MusicListBtn} />
            <MusicDrawer/ >
        </>
    );
}

export default MainApp;