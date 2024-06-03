import React from "react";

import MusicListBtn from "../../assets/musicListBtn.svg";

import CloseMatchContainer from "./CloseMatchContainer";
import MatchContainer from "./MatchContainer";
import MusicDrawer from "./MusicDrawer";
import NoMatchFound from "./NoMatchFound";
import SubHeading from "../SubHeading";

import ListenBtn from "../Buttons/ListenBtn";

function MainApp() {

    const handleMusicListBtnClick = () => {
        const musicDrawerHandle = document.getElementsByClassName("music-drawer")[0];
        musicDrawerHandle.classList.toggle("hide");
    };

    return (
        <>
            <div className="mainapp-container">
                <SubHeading />
                <ListenBtn />
                <MatchContainer songName="Attention" songSinger="Charlie Puth" matchPercentage="99%" songThumbnailSrc />
                {/* <NoMatchFound/> */}
                <CloseMatchContainer />
                
            </div>
            <img className="music-list-btn" onClick={handleMusicListBtnClick} src={MusicListBtn} />
            <MusicDrawer />
        </>
    );
}

export default MainApp;