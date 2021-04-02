import React from 'react'
import '../assets/scss/Profile.scss'
import {Link} from "react-router-dom";

function Profile () {
    return(
        <>
        <div class ="profile-info" id = "user-profile" >Profile</div>
        <div class ="profile-info" id = "goal">Goal Progress</div>
        <div class ="profile-info" id = "news-feed">News Feed</div>
        <div class ="profile-info" id = "user-tools">User Tools</div>
        </>
    )
}

export default Profile;
