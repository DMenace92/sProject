const express = require('express');
const app = express();
const api = require('./util/API')
const stockAlg = require('./util/stockAlgorithum')
const PORT = process.env.PORT || 9000;


app.use(api)



app.listen(PORT, (err) => {
    if (err) {
      throw err;
    }
    console.log(`server is running on port : ${PORT}`);
  });