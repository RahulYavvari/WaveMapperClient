import React from "react";

function NavIcon(props) {
    return (
        <div className="nav-icon">
            <img className={props.pathLocation === props.iconName ? "active-navicon" : ""} src={props.icon} alt={props.iconName} draggable="false" />
            <p>{props.iconName}</p>
        </div>
    );
}

export default NavIcon;