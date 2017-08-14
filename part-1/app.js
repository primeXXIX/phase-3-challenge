const express = require('express')
      app = express()
      bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Display message to Homepage
app.get('/', (req, res) => {
  res.send("This is the homepage")
})


// Shout route
app.get('/api/shout/:word', (req, res) => {
  // let word = req.params.word
  // res.send(word.toUpperCase() + '!!!')
  res.send(req.params.word.toUpperCase() + '!!!')
})

// Merge Route
app.post('/api/array/merge', (req, res) => {
  let a = req.body['a']
  let b = req.body['b']

console.log(a);
  // res.format({ 'application/json': () => { res.status(400).json({ "error": "input error" })}})
})





// Set up port
app.listen(3000, (req, res) => {
  console.log('Port 3000 is listening...');
})
