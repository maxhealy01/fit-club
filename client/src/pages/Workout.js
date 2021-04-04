import React from "react";

import "../assets/scss/Workout.scss";

function Workout(props) {
  return (
    <div className="workout-page">
      <div className="workout-item">
        <div className="workout-description">
          <div className="workout-name">
            <h1>Squats</h1>
            <h4>30 minutes</h4>
          </div>
          <div className="workout-detail">
            <iframe
              width="700"
              height="393"
              src="https://www.youtube.com/embed/qLPrPVz4NzQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>Posted By: aldrinburgos18</p>
          </div>
        </div>
      </div>
      <div className="workout-item">
        <div className="workout-description">
          <div className="workout-name">
            <h1>HIIT</h1>
            <h4>15 minutes</h4>
          </div>
          <div className="workout-detail">
            <iframe
              width="700"
              height="393"
              src="https://www.youtube.com/embed/1skBf6h2ksI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>Posted By: aldrinburgos18</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workout;
