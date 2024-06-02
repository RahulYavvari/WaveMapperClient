import React from "react";

import GithubLink from "../../assets/github.svg";
import LinkArrow from "../../assets/linkArrow.svg";


function ViewSourceBtn() {

    const handleClick = () => {
        window.open('https://github.com/RahulYavvari/WaveMapperServer', '_blank')
    };


    return (
        <div className="viewsource-btn" onClick={handleClick}>
            <img src={GithubLink} />
            View Source
            <img src={LinkArrow} />
        </div>
    );
}

export default ViewSourceBtn;