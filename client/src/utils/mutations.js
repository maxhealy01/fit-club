import gql from "graphql-tag";

export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			token
			user {
				_id
			}
		}
	}
`;

export const ADD_CONVERSATION = gql`
	mutation addConversation($recipients: [ID], $text: String!) {
		addConversation(recipients: $recipients, text: $text) {
			token
			user {
				_id
				conversations {
					recipients
					message
				}
			}
		}
	}
`;

export const CREATE_ACTIVITY = gql`
	mutation createActivity($name: String!, $type: String!) {
		createActivity(name: $name, type: $type) {
			_id
			name
			type
		}
	}
`;

export const POST_TESTIMONIAL = gql`
	mutation postTestimonial($text: String!) {
		postTestimonial(text: $text) {
			text
		}
	}
`;

export const POST_WORKOUT = gql`
	mutation postWorkout($name: String!, $duration: String!, $activity: ID!) {
		postWorkout(name: $name, duration: $duration, activity: $activity) {
			name
			duration
			activity {
				_id
			}
		}
	}
`;

export const ADD_FRIEND = gql`
	mutation addFriend($friendId: ID!) {
		addFriend(friendId: $friendId) {
			username
			friends {
				username
			}
		}
	}
`;

export const ADD_MEETUP = gql``;

export const ADD_ACTIVITY = gql`
	mutation addActivity($activityId: ID!) {
		addActivity(activityId: $activityId) {
			username
			activities {
				_id
				name
			}
		}
	}
`;

////////////////////////////////////////////
// create goal with mike's data structure //
////////////////////////////////////////////
// export const ADD_GOAL = gql`
//   mutation addGoal($goalType: String!, measurement: String!, startDate: String!, endDate: String!, endValue: Int!, progressData: [Object]!) {
//     addGoal(goalType: $goalType, measurement: $measurement, startDate: $startDate, endDate: $endDate, endValue: $endValue, progressData: $progressData) {
//       user {
//         goals {
//           goalType
//           measurement
//           startDate
//           endDate
//           endValue
//         }
//       }
//     }
//   }
// `
