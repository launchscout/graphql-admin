import gql from 'graphql-tag';

const queryTypeQuery = gql`
query getSchema {
  __schema {
    queryType {
      fields {
        name
        args {
          name,
          type {
            name
            kind
            ofType {
              name
              kind
            }
          }
        }
        type {
          fields {
            name
            type {
              kind
              name
            }
          }
          kind
          ofType {
            fields {
              name
              description
              type {
                kind
                name
              }
            }
          }
        }
      }
    }
  }
}
`;

export default queryTypeQuery;
