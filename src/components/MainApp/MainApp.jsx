import React from "react";

import SubHeading from "../SubHeading";

import MusicListBtn from "../../assets/musicListBtn.svg";
import MusicDrawer from "./MusicDrawer";
import ListenBtn from "../Buttons/ListenBtn";
import MatchContainer from "./MatchContainer";
import NoMatchFound from "./NoMatchFound";
import CloseMatchContainer from "./CloseMatchContainer";

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