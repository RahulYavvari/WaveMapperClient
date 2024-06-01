import React from "react";
import InstructionsContainer from "../InstructionsContainer";
import ViewSourceBtn from "../Buttons/ViewSourceBtn";
import Footer from "../Footer";
import AboutInfo from "./AboutInfo";
import SubHeading from "../SubHeading";

function About() {
    return (
        <div className="page-container">
                <SubHeading/>
                <div className="content-container">
                    <AboutInfo/>
                    <ViewSourceBtn/>
                </div>
                <div className="content-container">
                    <InstructionsContainer/>
                </div>
            <Footer/>
        </div>
    );
}

export default About;