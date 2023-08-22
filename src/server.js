require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const webRoutes = require('./routes/web')

const configViewEngine = require('./config/viewEngine.js')
const connection = require('./config/database')

// config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

// config template engine
configViewEngine(app)

// declare routes
app.use('/', webRoutes)

//test connection
connection()

// simple query
// connection.query(
//   'select * from Users u',
//   function(err, results, fields) {
//     console.log('results ===>',results); // results contains rows returned by server
//   }
// );

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})