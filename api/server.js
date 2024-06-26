const express = require('express')
require('dotenv').config({ path: './api/config/.env' })
const port = process.env.PORT

const app = express()


//Start the server
app.listen(4000, () => {
  console.log('Server is running on port 4000');
})

  // `Listening on port ${port}`