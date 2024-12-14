const express = require('express');
const coonectToMongo = require("./db");

coonectToMongo();

const app = express();
const port = 3000


// app.get('/', (req, res) => {
//   res.send('Hello srikrishan!')
// })
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})