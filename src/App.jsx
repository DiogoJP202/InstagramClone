import React from "react";
import LeftSection from "./components/LeftSection.jsx";
import RightSection from "./components/RightSection.jsx";
import MiddleSection from "./components/MiddleSection.jsx";
import "./App.css";

export default function App(){
    return (
        <div>
            <LeftSection />
            <MiddleSection />
            <RightSection />
        </div>
    );
}