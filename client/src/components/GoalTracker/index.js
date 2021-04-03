import React, { useState } from 'react';
import { LineChart, YAxis, XAxis, CartesianGrid, Line, ReferenceLine } from 'recharts';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const GoalTracker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [goalDate, setGoalDate] = useState(new Date());

    const goalType = 'Weight Loss'


        // const handleFormSubmit = async event => {
        //     event.preventDefault();

        //     try {
        //       // add thought to database
        //       await addThought({
        //         variables: { thoughtText }
        //       });

        //       // clear form value
        //       setText('');
        //       setCharacterCount(0);
        //     } catch (e) {
        //       console.error(e);
        //     }
        //   };

    const startData =
        {
            date: '4/3/2021',
            value: 200
        }

    const goalData =
        {
            date: '7/3/2021',
            goal_value: 120
        }

    const inputData = [
        {
            date: '4/26/2021',
            value: 180
        },
        {
            date: '5/15/2021',
            value: 162
        },
        {
            date: '6/1/2021',
            value: 170
        },
        {
            date: '6/21/2021',
            value: 157
        }
      ];

      inputData.push(goalData);
      inputData.unshift(startData);
      console.log(inputData);

  return (
    <div>
        <h1>
            Goal Tracker
        </h1>

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



            <button id="add-btn"><i class="fa fa-plus buttons"></i> Submit</button>
            <p class="error"></p>
        </div>


        <div class="form">
            <h4>Add Goal Progress Information</h4>

            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

            <input type="number" min="0" id="t-amount" placeholder="Value" style={{margin: 20}} />
            <button id="add-btn"><i class="fa fa-plus buttons"></i> Submit</button>
            <p class="error"></p>
        </div>
        <p>
            Health Goal: {goalType}
        </p>
        <LineChart width={500} height={300} data={inputData}>
            <XAxis dataKey="date"/>
            <YAxis/>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <ReferenceLine y={goalData.goal_value} stroke="red" label="Health Goal" />
        </LineChart>
    </div>
  );
};

export default GoalTracker;