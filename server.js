const path = require("path");

const express = require("express");
// const { graphqlHTTP } = require("express-graphql");
const {ApolloServer}=require('apollo-server-express')
// const { buildSchema } = require('graphql')
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

async function startApolloServer() {
  const app = express();

  // console.log(typesArray[0].definitions)
  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });
  
  // Apollo and graphql tools works well with each other
  const server = new ApolloServer({
    schema
  })

  await server.start()
  server.applyMiddleware({ app, path: '/graphql' })
  
  app.listen(5000, () => console.log("server started on port:5000....."));
}

startApolloServer()

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     // rootValue: root,
//     graphiql: true,
//   })
// );

