const express = require('express')
require('dotenv').config({ path: './api/config/.env' })
const mongoose = require('mongoose')
const connectDb = require('./config/db.js')
const userRoutes = require('./routes/user.route')
const authRoute = require('./routes/auth.route')
const port = process.env.PORT
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//Database
connectDb()

//Routes
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoute)

//Start the server
app.listen(4000, () => {
  console.log(`Listening on port ${port}`);
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});