import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignupForm() {


	return (
		<div className="container my-1">
			<Link to="/login">← Go to Login</Link>

			<h2>Signup</h2>
			<form>
				<div className="flex-row space-between my-2">
					<label htmlFor="firstName">First Name:</label>
					<input
						placeholder="First"
						name="firstName"
						type="firstName"
						id="firstName"
						// onChange={handleChange}
					/>
				</div>
				<div className="flex-row space-between my-2">
					<label htmlFor="lastName">Last Name:</label>
					<input
						placeholder="Last"
						name="lastName"
						type="lastName"
						id="lastName"
						// onChange={handleChange}
					/>
				</div>
				<div className="flex-row space-between my-2">
					<label htmlFor="email">Email:</label>
					<input
						placeholder="youremail@test.com"
						name="email"
						type="email"
						id="email"
						// onChange={handleChange}
					/>
				</div>
				<div className="flex-row space-between my-2">
					<label htmlFor="pwd">Password:</label>
					<input
						placeholder="******"
						name="password"
						type="password"
						id="pwd"
						// onChange={handleChange}
					/>
				</div>
				<div className="flex-row flex-end">
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default SignupForm;
