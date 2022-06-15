require("dotenv").config();
const express = require("express");
const colors = require('colors')
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const db = require('./config/db')
const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "DEVELOPMENT",
  })
);

app.listen(PORT, () => {
  //connect to database
  db();
  console.log(`Server running on  port: ${PORT}`);
});
