import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ProjectShowCasing.css';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        partialVisibilityGutter: 40
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        partialVisibilityGutter: 40
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        partialVisibilityGutter: 30
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 30
    }
};

const responsiveTwo = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 6,
        partialVisibilityGutter: 0
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        partialVisibilityGutter: 40
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        partialVisibilityGutter: 30
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 30
    }
};

const ProjectShowCasing=()=>{
    return(
        <section id="project-show-casing">
            <h2>Work Experience</h2>
            <div className="work-experience">
                <div id="first-work-experience" className="slide-paused"></div>
            </div>
            <h2>Projects</h2>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                <div id="one" className="slide"></div>
                <div id="two" className="slide"></div>
                <div id="three" className="slide"></div>
                <div id="four" className="slide"></div>
                <div id="five" className="slide"></div>
            </Carousel>
            <h2>Education</h2>
            <div className="work-experience">
                <div id="high-schooling" className="slide-paused"></div>
                <div id="college" className="slide-paused"></div>
            </div>
            <h2>Languages</h2>
            <Carousel
                responsive={responsiveTwo}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                <div id="one-language" className="slide-language"></div>
                <div id="two-language" className="slide-language"></div>
                <div id="three-language" className="slide-language"></div>
                <div id="four-language" className="slide-language"></div>
                <div id="five-language" className="slide-language"></div>
                <div id="six-language" className="slide-language"></div>
                <div id="seven-language" className="slide-language"></div>
            </Carousel>
        </section>
    );
}
export default ProjectShowCasing;