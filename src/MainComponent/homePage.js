import React from "react";
import HeroSection from "../Component/HeroSection";
import NavBar from "../Component/navBar";
import './homePage.css';
import AboutPage from "../Component/aboutPage";
import SkillsData from "../Component/skiilsData";
import FillerOne from "../Component/FillerOne";
import ProjectShowCasing from "../Component/ProjectShowCasing";
import GetInTouch from "../Component/getInTouch";
import FillerTwo from "../Component/FillerTwo";

const HomePage = ()=>{
    return(
        <section id="homepage">
            <NavBar/>
            <HeroSection/>
            <AboutPage/>
            <SkillsData/>
            <FillerOne/>
            <ProjectShowCasing/>
            <GetInTouch/>
            <FillerTwo/>
        </section>
    );
}

export default HomePage;