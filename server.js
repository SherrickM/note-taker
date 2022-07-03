const express = require('express');
const api = require('./routes/apiRoutes');
const html = require('./routes/htmlRoutes')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

// routes will go here
app.use('/api', api)
app.use('/', html)

// Creating app to listen
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);