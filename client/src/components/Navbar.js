import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../pages/Signup";
import LoginForm from "../pages/Login";
import '../assets/scss/navbar.scss';
import Auth from "../utils/auth";

const AppNavbar = () => {
	// set modal display state
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<header className="header">
        <div className="header-top">
            <div className="fit-title">
                <h1><a href="#">FIT CLUB</a></h1>
            </div>
            <div className="navbar">
                <ul>
                    <li><a href="#">Class</a></li>
                    <li><a href="#">Activity</a></li>
                    <li><a href="#">Trainers</a></li>
                    <li><a href="#">My Profile</a></li>
                    <li><a href="#">Info</a></li>
                </ul>
            </div>
            <div className="account">
                <div className="userInfo-btn">
                    <a href="#"><i className="fas fa-user"></i>
                    Account
                    </a>
                </div>
            </div>
        </div>
    </header>
    <div className="subheader">
    </div>
		</>
	);
};

export default AppNavbar;
