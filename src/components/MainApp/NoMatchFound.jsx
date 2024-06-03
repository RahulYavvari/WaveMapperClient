import React from "react"

function NoMatchFound(props) {

    if(props.fetchStatus == null || props.fetchStatus == true) {
        return null;
    }

    if(props.fetchStatus == false) {
        return (
            <h1 className="no-match-found">No Match Found</h1>
        );
    }
}

export default NoMatchFound;