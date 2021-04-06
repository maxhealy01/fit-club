import React from "react";
import '../assets/scss/coverpage.scss'

import LoginForm from "../components/LoginForm";


const CoverPage = () => {

	return (
        <div className="cover-page">
        <div className="coverpage-wrapper">
          <LoginForm />
        </div>
    </div>
	);
};

export default CoverPage;
