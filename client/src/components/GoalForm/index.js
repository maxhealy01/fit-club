import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const GoalForm = ({goals}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [goalDate, setGoalDate] = useState(new Date());

      goals.progressData.push(goals.endData);
      goals.progressData.unshift(goals.startData);
      console.log(goals.progressData);

  return (
    <div>
        <div class="form">
            <h4>Create A New Goal</h4>

            <label for="start-date">Start Date</label>
            <DatePicker id="start-date" selected={startDate} onChange={date => setStartDate(date)} />

            <label for="start-value">Starting Value</label>
            <input type="number" min="0" id="start-value" placeholder="Value" style={{margin: 20}} />

            <label for="goal-date">Goal Date</label>
            <DatePicker id="goal-date" selected={goalDate} onChange={date => setGoalDate(date)} />

            <label for="goal-value">Goal Value</label>
            <input type="number" min="0" id="goal-value" placeholder="Value" style={{margin: 20}} />

            <LineChart width={600} height={300} data={goal}>
                <XAxis dataKey="date"/>
                <YAxis/>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <ReferenceLine y={goal.endData.value} stroke="red" label="Health Goal" />
            </LineChart>



            <button id="add-btn"><i class="fa fa-plus buttons"></i> Submit</button>
            <p class="error"></p>
        </div>

    </div>
  );
};

export default GoalForm;