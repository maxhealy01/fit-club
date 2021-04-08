import React from "react";
import '../assets/scss/Footer.scss'
// import { Link } from "react-router-dom";

const Footer = () => {
	// set modal display state
	// const [showModal, setShowModal] = useState(false);
 

	return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-content">
                    <h3>FitClub</h3>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="creator">
                    <h3>FitClub</h3>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            
        </div>
	);
};

export default Footer;
