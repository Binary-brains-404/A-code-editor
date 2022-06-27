const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");

router.post('/compilerapi', async (req, res) => {

  const {code, language, input} = req.body;
  // let language = req.language;
  // let input = req.input;
  const data = JSON.stringify({
    code: code,
    language: language,
    input: input
    });

  console.log(data)
  
  const response = await fetch('https://codexweb.netlify.app/.netlify/functions/enforceCode', {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: data
  })
  const jsonResponse = await response.json();
  console.log(jsonResponse.output);
  
  res.json({success: "successfull", output: {jsonResponse}});
});

module.exports = router;