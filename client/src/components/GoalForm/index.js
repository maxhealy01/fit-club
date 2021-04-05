import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const GoalForm = () => {
    const [currentStartDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
        <div class="form" style={{margin: 50, border:"5px solid black"}}>
            <h2>Create A New Goal</h2>

            <label for="goal-type">Select Goal Type</label>
            <select name = "goal-type" id="goal-type">
                <option value = "Strength Training" selected>Strength Training</option>
                <option value = "Weight Loss">Weight Loss</option>
                <option value = "Running">Running</option>
            </select>

            <label for="start-date">Start Date</label>
            <DatePicker id="start-date" selected={currentStartDate} onChange={date => setStartDate(date)} />

            <label for="goal-date">Goal Date</label>
            <DatePicker id="goal-date" selected={endDate} onChange={date => setEndDate(date)} />

            <label for="goal-value">Goal Value</label>
            <input type="number" min="0" id="goal-value" placeholder="Value" style={{margin: 20}} />

            <button id="add-btn"><i class="fa fa-plus buttons"></i> Submit</button>
            <p class="error"></p>
        </div>
    </div>
  );
};

export default GoalForm;