import React from "react";
import ViewSourceBtn from "../Buttons/ViewSourceBtn";
import Footer from "../Footer";
import InstructionsContainer from "../InstructionsContainer";
import GetStarted from "../Buttons/GetStartedBtn";
import Heading from "./Heading";

function Home() {
    return (
        <div className="page-container">
            <Heading/>
            <GetStarted />
            <div className="content-container">
                <InstructionsContainer />
            </div>
            <ViewSourceBtn />
            <Footer />
        </div>
    );
}

export default Home;