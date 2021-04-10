import React from "react";
import '../assets/scss/coverpage.scss'

import Login from "../components/Login";


const CoverPage = () => {

	return (
        <div className="cover-page">
        <div className="coverpage-wrapper">
          <Login />
        </div>
    </div>
	);
};

export default CoverPage;
