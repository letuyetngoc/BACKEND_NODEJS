require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const webRoutes = require('./routes/web')

const configViewEngine = require('./config/viewEngine,js')

// config template engine
configViewEngine(app)

// declare routes
app.use('/v1', webRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})