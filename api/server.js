const express = require('express')
require('dotenv').config({ path: './api/config/.env' })
const mongoose = require('mongoose')
const connectDb = require('./config/db.js')
const port = process.env.PORT

const app = express()


//Database
connectDb()

//Start the server
app.listen(4000, () => {
  console.log('Server is running on port 4000');
})

  // `Listening on port ${port}`