const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const resolvers = require("./resolvers");
const cors = require('cors');

app.use(cors());
const root = resolvers;
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))
app.listen(5000, () => {
    console.log(`port is listening on 5000`);
});
