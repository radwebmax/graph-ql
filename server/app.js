const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();
const PORT = 3005;

mongoose
  .connect('mongodb+srv://maxon:dh88tnP13ZcPTf6z@cluster0.ddvgepd.mongodb.net/graph-ql?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Connected to DB'))
  .catch((error) => console.log(error));


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, err => {
    err ? console.log(err) : console.log(`Server started at port ${PORT}`);
});