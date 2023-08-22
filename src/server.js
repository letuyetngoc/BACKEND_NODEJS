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


;(async() => {
  //test connection
  try {
    await connection();
    app.listen(port, () => {
      console.log(`Backend zero app listening on port ${port}`)
    })
  } catch (error) {
    console.log(">>> Error connect to DB", error)
  }
})()

