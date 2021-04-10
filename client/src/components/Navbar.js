import React from "react";
import { Link } from "react-router-dom";

import '../assets/scss/navbar.scss';
import auth from "../utils/auth";



const AppNavbar = () => {

    const Logout = () => {
        auth.logout();
    }
	return (
		<>
			<header className="header">
            <div className="header-top">
            <div className="fit-title">
                <Link to="/">
                    <img  alt="logo" src= {require ("../assets/images/logo2.png").default} />
                </Link>
                
            </div>
            <div className="navbar">
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/Classes"}>Class</Link>
                    </li>
                    <li>
                        <Link to={"/Workout"}>Workout</Link>
                    </li>
                    <li>
                        <Link to={"/Profile"}>Page</Link>
                    </li>
                    <li>
                        <Link onClick={Logout} to={"/Profile"}>Log Out</Link>
                    </li>
                </ul>
            </div>
        </div>
        </header>
    <div className="subheader">
    </div>
		</>
	);
};

export default AppNavbar;


