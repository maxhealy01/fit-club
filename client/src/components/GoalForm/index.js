import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../assets/scss/GoalForm.scss';



const GoalForm = () => {
    const [currentStartDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="goal-form">
      <div className="mypic"><div></div></div>

        <div className="form">
            <h2>Create A New Goal</h2>

            

          <div className="options">
              <div className="select opt">
                <p>Select Goal Type</p>
                <div className="select">
                  <select name = "goal-type" id="goal-type"> 
                      <option value = "Strength Training" selected>
                        Strength Training
                      </option>
                      <option value = "Weight Loss">Weight Loss</option>
                      <option value = "Running">Running</option>
                  </select>
                </div>
              </div>
              
              <div className="start-date opt">
                <p for="start-date">Start Date</p>
                <div className="select">
                  <DatePicker className="DatePicker" id="start-date" selected={currentStartDate} 
                  onChange={date => setStartDate(date)} />
                </div>
              </div>
              <div className="goal-date opt">
                <p for="goal-date">Goal Date</p>
                <div className="select">
                  <DatePicker className="DatePicker" id="goal-date" selected={endDate} 
                  onChange={date => setEndDate(date)} />
                </div>
              </div>
            
              <div className="goal-value opt">
                <p for="goal-value">Goal Value</p>
                <div className="select">
                  <input type="number" id="goal-value" placeholder="Value"/>
                </div>
                
              </div>
              

              <button id="add-btn">Submit</button>
            </div>
        </div>
    </div>
  );
};

export default GoalForm;