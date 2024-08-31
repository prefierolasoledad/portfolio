import React from "react";
import './Contact.css';

const Contact=()=>{
    return(
        <section id="contact-page">
            <h2 id="contact-details-heading">
                Contact Details
            </h2>
            <div id="contact-us-box">
                <div id="phone-number-box">
                    <h3 className="contact-us-head-three">
                        Phone
                    </h3>
                    <p className="contact-us-p-three">
                        +91-7428858118
                    </p>
                </div>
                <div id="email-detail-box">
                    <h3 className="contact-us-head-three">
                        Emial
                    </h3>
                    <p className="contact-us-p-three">
                        karanbhatt9900@gmail.com
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;