import React from "react";
import { useNavigate } from "react-router-dom";

function Splash() {

    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/app/home");
    }, 2000);

    return (
        <div className="splash-container">
            <h1 className="heading">WaveMapper</h1>
        </div>
    );
}

export default Splash;