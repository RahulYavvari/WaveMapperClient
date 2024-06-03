import React from "react";

import MatchContainer from "./MatchContainer";

function CloseMatchContainer() {
    return (
        <div className="close-matches-container">
            <h2>Close Matches</h2>
            <MatchContainer songName="Attention Bright Mix" songSinger="Charlie Puth" matchPercentage="80%" songThumbnailSrc />
            <MatchContainer songName="Attention (Remix)" songSinger="Charlie Puth" matchPercentage="56%" songThumbnailSrc />
            <MatchContainer songName="Attention Sped Up" songSinger="Charlie Puth" matchPercentage="32%" songThumbnailSrc />
        </div>
    );
}

export default CloseMatchContainer;