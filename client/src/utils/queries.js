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
export const QUERY_GOALS = gql`
  query goals($username: String) {
    goals(username: $username) {
      _id
      goalType
      startDate
      endDate
      endValue
      progressData {
        _id
        date
        value
      }
    }
  }
`;

export const QUERY_TRAINERS = gql`
  {
    trainers {
      _id
      username
    }
  }
`;
