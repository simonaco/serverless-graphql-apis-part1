# GraphQL API

This is a GraphQL endpoint calling two existing REST api endpoints

You can explore the endpoint we'll build at [https://graphqlplayground.azurewebsites.net/api/graphiql](https://graphqlplayground.azurewebsites.net/api/graphiql)

## Steps

If you haven't already, make sure to clone this repository.

1. ⚠️ Navigate to the project's folder and open it in a *new instance* of VS Code

1. Install dependencies

```
npm install
```

1. Go to *Debug* panel in VS Code and click run

1. Using [Postman](https://www.getpostman.com/) (or any Rest client) make a POST request to your GraphQL endpoint running in your local [http://localhost:7071/api/graphql](http://localhost:7071/api/graphql) with this body of type *application/json*:

```json
{ "query": "{teams{id name points}}"}
```

1. To deploy your function using VS Code go to the Azure Functions extension. Click the blue arrow button and follow prompt instructions to either create a new function or deploy to an existing one
