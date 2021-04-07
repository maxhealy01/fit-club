import gql from "graphql-tag";

export const QUERY_ME = gql`
	{
		me {
			_id
		}
	}
`;

////////////////////////////////////////////
// query goals with mikes data structure  //
////////////////////////////////////////////
// export const QUERY_GOALS = gql`
//   {
//     me {
//       goals {
//         goalType
//         measurement
//         startDate
//         endDate
//         endValue
//         progressData {
//           date
//           value
//         }
//       }
//     }
//   }
// `;

export const QUERY_TRAINERS = gql`
	{
		trainers {
			_id
			username
		}
	}
`;

export const QUERY_USERS = gql`
	{
		users {
			_id
			username
			email
			city
			friends {
				username
			}
			meetups {
				_id
			}
			activities {
				_id
				name
			}
			testimonials {
				_id
				text
			}
			isTrainer
			messages {
				_id
			}
		}
	}
`;

export const QUERY_USER = gql`
	query user($username: String!) {
		user(username: $username) {
			_id
			username
			email
			city
			friends {
				username
			}
			meetups {
				_id
			}
			activities {
				_id
				name
			}
			testimonials {
				_id
				text
			}
			isTrainer
			messages {
				_id
			}
		}
	}
`;

export const QUERY_ACTIVITIES = gql`
	{
		activities {
			_id
			name
			type
		}
	}
`;

export const QUERY_MEETUPS = gql`
	{
		meetups {
			_id
			name
			location
			duration
		}
	}
`;

export const QUERY_TESTIMONIALS = gql`
	query testimonials($postedBy: ID) {
		testimonials(postedBy: $postedBy) {
			_id
			text
			postedBy
		}
	}
`;

export const QUERY_WORKOUTS = gql`
	query workouts($activity: ID) {
		workouts(activity: $activity) {
			_id
			name
			duration
		}
	}
`;
