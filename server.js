const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./Schemas');

const app = express();
const PORT = 8000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log('Server is running');
});
