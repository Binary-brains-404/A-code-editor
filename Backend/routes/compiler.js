const https = require('https');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {


  // const query = "London"
  // const apikey = "d15e4f2ae60d67eae03d3b341b20b3f1"
  // const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + "&units=metric"

  // https.get(url, (response) => {
  //   console.log(response.statusCode)
  // })

  res.send("running")
})

router.post('/', async (req, res) => {
  // const query = "London"
  // const apikey = "d15e4f2ae60d67eae03d3b341b20b3f1"
  // const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + "&units=metric"

  // https.get(url, (response) => {
  //   console.log(response.statusCode)
  // })
  res.send();
})

module.exports = router;