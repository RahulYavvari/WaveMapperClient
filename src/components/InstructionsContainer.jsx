import React from "react";

import MusicListBtn from "../assets/musicListBtn.svg";

function InstructionsContainer() {
    return (
        <>
            <h3>Instructions</h3> <br />
            <p>
                Since we don’t have access to a database containing every single song, a few songs were added into our database, they can be accessed by using <span><img draggable="false" src={MusicListBtn} style={{ width: "16px", position: "relative", top: "4px" }} /></span> button for testing purpose. Please play the song from here (or) you can play on another device and test here.
            </p>
        </>
    );
}

export default InstructionsContainer;