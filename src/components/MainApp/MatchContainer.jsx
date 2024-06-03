import React from "react";

import ThumbnailPlacholder from "../../assets/thumbnailPlaceholder.svg";

function MatchContainer(props) {
    return (
        <div className="matches-container">
            <div className="thumb-name-holder">
                <img src={ThumbnailPlacholder} />
                <div className="music-content">
                    <h4>{props.songName}</h4>
                    <p>{props.songSinger}</p>
                </div>
            </div>
            <h1>{props.matchPercentage}</h1>
        </div>
    );
}

export default MatchContainer;