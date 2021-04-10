import React from "react";
import { Link } from "react-router-dom";

import '../Profile.scss';



const ProfileHeader = () => {


	return (
		<>
      <div className="mypage-header">
        <div className="mypage-grad">
          <div className="mypage-header-content">
            <h1>
              Profile
            </h1>
            <p>
              Your displine for health and fitness will also have a positive impact on other areas of your life.
              </p>
          </div>
        </div>
      </div>
		</>
	);
};

export default ProfileHeader;


