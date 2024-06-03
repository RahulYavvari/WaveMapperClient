import React from "react";

import Close from "../../assets/close.svg";



import MusicContainer from "./MusicContainer";

function MusicDrawer() {

    const handleMusicListBtnClick = () => {
        const musicDrawerHandle = document.getElementsByClassName("music-drawer")[0];
        musicDrawerHandle.classList.toggle("hide");
    };

    return (
        <>
            <div className="music-drawer hide">
                <img id="close-btn" onClick={handleMusicListBtnClick} src={Close} />
                <div className="scrollable-container">
                    <MusicContainer songName="Attention" songSinger="Charlie Puth" songThumbnailSrc songSrc />
                    <MusicContainer songName="Perfect" songSinger="Ed Sheeran" songThumbnailSrc songSrc />
                    <MusicContainer songName="Senorita" songSinger="Shawn Mendes" songThumbnailSrc songSrc />
                    <MusicContainer songName="How Long" songSinger="Charlie Puth" songThumbnailSrc songSrc />
                    <MusicContainer songName="Attention" songSinger="Charlie Puth" songThumbnailSrc songSrc />
                    <MusicContainer songName="Perfect" songSinger="Ed Sheeran" songThumbnailSrc songSrc />
                    <MusicContainer songName="Senorita" songSinger="Shawn Mendes" songThumbnailSrc songSrc />
                    <MusicContainer songName="How Long" songSinger="Charlie Puth" songThumbnailSrc songSrc />
                </div>
            </div>
        </>
    );
}

export default MusicDrawer;