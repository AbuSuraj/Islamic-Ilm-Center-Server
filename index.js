const express = require('express')
const app = express()
const port = process.env.PORT || 5000;


const categories = require('./data/course-category.json');

const course = require('./data/course-details.json')

app.get('/', (req, res) => {
  res.send('Ilm Center api is running!')
})
app.get('/categories', (req, res) => {
  res.send(categories)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})