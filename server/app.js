const express = require("express");
const app = express();
const graphqlHTTP = require("express-graphql");
require("dotenv").config();

app.use("/graphql", graphqlHTTP({}))

app.listen(process.env.PORT, () => {
    console.log("Listening on port : " + process.env.PORT);
})