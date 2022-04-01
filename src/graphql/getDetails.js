import gql from 'graphql-tag';

export const GET_POKEMON_DETAILS = gql`
query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      message
      status
    }
  }
`;

