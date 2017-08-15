const express = require('express')
      app = express()
      bodyParser = require('body-parser')
      mergeArray = require('./merge-array')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Display message to Homepage
app.get('/', (req, res) => {
  res.send("This is the homepage")
})


// Shout route
app.get('/api/shout/:word', (req, res) => {
  // let result = req.params.word
  // res.send(`${result}!!!`)
  res.send(req.params.word.toUpperCase() + '!!!')
})

// Merge Route
app.post('/api/array/merge', (req, res) => {
  if (Array.isArray(req.body.a) && Array.isArray(req.body.b)) {
    console.log('true');
    res.send("true")
  } else {
    console.log("not");
    res.send("not")
  }

 })







// Set up port
app.listen(3000, (req, res) => {
  console.log('Port 3000 is listening...')
})

// const port = process.env.PORT || 3000
