import gql from "graphql-tag";

export const QUERY_ME = gql`
  {
    me {
      _id
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
