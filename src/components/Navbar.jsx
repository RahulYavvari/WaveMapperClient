import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import NavIcon from "./NavIcon";

import HomeIcon from "../assets/home.svg";
import AboutIcon from "../assets/about.svg";
import ListenBtn from "../assets/ListenBtn.svg";

function Navbar() {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/")[2];

    return (
        <>
            <nav className="navbar">
                <Link to={"/app/home"}>
                    <NavIcon pathLocation={splitLocation} icon={HomeIcon} iconName="home" />
                </Link>
                <Link to={"/app"}>
                    <img src={ListenBtn} alt="Start Listening" draggable="false" />
                </Link>
                <Link to={"/app/about"}>
                    <NavIcon pathLocation={splitLocation} icon={AboutIcon} iconName="about" />    
                </Link> 
            </nav>
            <Outlet/>
        </>
    );
}

export default Navbar;