import React from "react";

import Play from "../../assets/play.svg";
import ThumbnailPlacholder from "../../assets/thumbnailPlaceholder.svg";

function MusicContainer(props) {
    return (
        <div className="music-container">
            <div className="thumb-name-holder">
                <img src={ThumbnailPlacholder} />
                <div className="music-content">
                    <h4>{props.songName}</h4>
                    <p>{props.songSinger}</p>
                </div>
            </div>
            <img src={Play}/>
        </div>
    );
}

export default MusicContainer;