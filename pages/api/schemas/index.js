import  {  gql  }  from  'apollo-server-micro'; 

export  const  typeDefs  =  gql`
    type  Hotel {
        id: ID
        name: String
        description: String
        price: Float
        city: String
        country: String
        rate: Float
        image: String
    }

    type  Query {
        hotels: [Hotel]
        hotel(name: String!): Hotel!
    }`
