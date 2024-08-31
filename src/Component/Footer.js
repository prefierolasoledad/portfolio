import React from "react";
import './Footer.css';

const Footer=()=>{
    return(
        <section id="footer">
            <div id="links-footer-div">
                <div id="links-footer">
                    <p>
                        Home
                    </p>
                    <p>
                        Projects
                    </p>
                    <p>
                        Skills
                    </p>
                    <p>
                        Contact
                    </p>
                </div>
                <p id="copyright">
                © 2024 Karan Bhatt. All rights reserved.
                </p>
            </div>
        </section>
    );
}

export default Footer;