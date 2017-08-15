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
  const { a, b } = req.body
  console.log(typeof a);
  console.log(typeof b);

  if (!Array.isArray(a) || !Array.isArray(b)) {
    res.status(400).send('Input data should be type of Array.')
  }

  const merge = a.reduce(function(arr, v, i) {
    return arr.concat(v, b[i])
  }, [])

  res.send({
    result: merge
  })
  console.log(merge);
})


// Set up port
app.listen(3000, (req, res) => {
  console.log('Port 3000 is listening...')
})

// const port = process.env.PORT || 3000
