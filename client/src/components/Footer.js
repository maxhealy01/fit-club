import React from "react";
import '../assets/scss/Footer.scss'

const Footer = () => {

	return (
        <div className="footer">
            <div className="yellow-line"></div>
            <div className="footer-wrapper">
                <h1>
                    contributors
                </h1>
                <div className="contributors">
                   <a href="https://github.com/CaseyDeriso" 
                   target="_blank"
                   >
                    Deriso, Casey
                   </a>
                   <a href="https://github.com/maxhealy01" 
                   target="_blank"
                   >
                   Healy, Maxwell
                   </a>
                   <a href="https://github.com/yuniksung" 
                   target="_blank"
                   >
                   Sung, Yunik
                   </a>
                   <a href="https://github.com/MikeGShelby" 
                   target="_blank"
                   >
                   Shelby, Michael
                   </a>
                   <a href="https://github.com/aldrinburgos18" 
                   target="_blank"
                   >
                   Burgo, Aldrin
                   </a>
                   <a href="https://github.com/JenniferFadare" 
                   target="_blank"
                   >
                   Fadare, Jennifer
                   </a>
                </div>
               
            </div>
        </div>
	);
};

export default Footer;
