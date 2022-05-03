const https = require('https');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {


  // const query = "London"
  // const apikey = ""
  // const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + "&units=metric"

  // https.get(url, (response) => {
  //   console.log(response.statusCode)
  // })

  res.send("running")
})

router.post('/', async (req, res) => {
  // const query = "London"
  // const apikey = ""
  // const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + "&units=metric"

  // https.get(url, (response) => {
  //   console.log(response.statusCode)
  // })
  res.send();
})

module.exports = router;
