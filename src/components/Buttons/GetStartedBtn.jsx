import React from "react";

import { useNavigate } from "react-router-dom";

function GetStartedBtn() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/app");
    };

    return (
        <button onClick={handleClick}>Get Started</button>
    );
}

export default GetStartedBtn;