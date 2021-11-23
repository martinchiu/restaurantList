// require data and packages used in the project
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const restaurantsData = require("./restaurant.json").results

// setting template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
  res.render('index', { restaurant: restaurantsData })
})
app.get('/restaurants/:id', (req, res) => {
  const showId = req.params.id
  const showTarget = restaurantsData.find(restaurant => restaurant.id.toString() === showId)
  res.render('show', { restaurant: showTarget})
})
app.get('/search', (req, res) => {
  const keywords = req.query.keyword
  const keyword = req.query.keyword.trim().toLowerCase()

  const restaurant = restaurantsData.filter(function searchKeywords(restaurant){
    return restaurant.name.toLowerCase().includes(keyword) || restaurant.category.includes(keyword)
  }) 
  res.render('index', {restaurant, keywords})
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
