import React from "react";
import './FillerTwo.css';
import videoSrc from '../Images/FillerTwo.mp4';


const FillerTwo=()=>{
    return (
        <section className="filler-two">
            <video autoPlay loop muted playsInline>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    )
}

export default FillerTwo;