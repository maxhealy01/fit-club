import React from 'react';
import '../assets/scss/Trainers.scss';
 

function trainerPage() {

    return(
        <div className="trainer-page">
            <div className="trainer-list">
                <div className="trainer-item">
                    <div className="trainer-photo">
                    </div>
                    <div className="trainer-name">
                        <div className="trainer-description">
                            <h1>Class 1</h1>
                            <ul>
                                <li>Date: 00/00/00 SAT</li>
                                <li>Time: 00:00 PM</li>
                                <li>Location: Austin</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default trainerPage