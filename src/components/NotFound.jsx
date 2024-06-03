import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="not-found-container">
            <h1>Page Not Found</h1>
            <h2>Go back to <Link to={"/app/home"}><span className="return-home-link">Home</span></Link></h2>
        </div>
    );
}

export default NotFound;