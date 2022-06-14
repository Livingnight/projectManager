require("dotenv").config();
const express = require("express");
const colors = require('colors')
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const db = require('./config/db')
const PORT = process.env.PORT || 5000;

const app = express();

//connect to database
db();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "DEVELOPMENT",
  })
);

app.listen(PORT, () => {
  console.log(`Server running on  port: ${PORT}`);
});
