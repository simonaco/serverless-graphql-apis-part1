const { graphql, buildSchema } = require('graphql');
const axios = require('axios');
const schema = buildSchema(`
  type Team {
    id: ID
    name: String
    points: Int
  }
  type Query {
    teams: [Team]
  }
  type Mutation {
    incrementPoints(id:ID!):Team  
  }
`);

const resolver = {
  teams: (obj, args, context) => {
    return axios
      .get('https://graphqlvoting.azurewebsites.net/api/score')
      .then(res => res.data);
  },
  incrementPointsobj: (obj, args, context) => {
    return axios
      .get(`https://graphqlvoting.azurewebsites.net/api/score/${obj.id}`)
      .then(res => res.data);
  }
};
module.exports = async function(context, req) {
  const body = req.body;
  context.log(`GraphQL request: ${body}`);

  const response = await graphql(schema, body, resolver);
  context.res = {
    body: response
  };
};
