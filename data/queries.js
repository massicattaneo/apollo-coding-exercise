import { gql } from '@apollo/client';

export const GET_HOTELS = gql`
      query {
        hotels {
          id
          name
          description
          price
          city
          country
          rate
          image
        }
      }
    `;