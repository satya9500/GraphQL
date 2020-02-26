const express = require("express");
const app = express();
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
require("dotenv").config();

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(process.env.PORT, () => {
    console.log("Listening on port : " + process.env.PORT);
});