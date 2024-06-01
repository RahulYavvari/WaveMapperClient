import React from "react";

import GithubLink from "../../assets/github.svg";
import LinkArrow from "../../assets/linkArrow.svg";


function ViewSourceBtn() {
    return (
        <div className="viewsource-btn">
            <img src={GithubLink} />
            View Source
            <img src={LinkArrow} />
        </div>
    );
}

export default ViewSourceBtn;