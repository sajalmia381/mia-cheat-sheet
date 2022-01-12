const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 8000

const connectMongoRetryLoop = () => {
  mongoose.connect('mongodb://root:hello123@mongo:27017/express-api-db?authSource=admin')
  .then(() => console.log("mongodb: mongo database connected"))
  .catch((e) => {
    console.log("mongodb: mongo connection failed")
    console.log('failed', e)
    setTimeout(() => {connectMongoRetryLoop}, 10000)
  })
}
connectMongoRetryLoop();

app.get('/', (req, res) => {
  res.json({
    name: 'Noah',
    email: 'noah@gmail.com'
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})