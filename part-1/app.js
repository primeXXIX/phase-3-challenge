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
  // let result = req.params.word
  // res.send(`${result}!!!`)
  res.send(req.params.word.toUpperCase() + '!!!')
})

// Merge Route
app.post('/api/array/merge', (req, res) => {

const { a, b } = req.body

if (Array.isArray(a) && Array.isArray(b)) {
  resultArr = []

  const merge = a.map((v, i) => {
    resultArr.push(a[i])
    resultArr.push(b[i])
    return resultArr
  })
} else {
  res.format({ 'application/json': () => { res.status(400).json({ "error": "Input error"})}})
}

}
// Set up port
app.listen(3000, (req, res) => {
  console.log('Port 3000 is listening...')
})

// const port = process.env.PORT || 3000
