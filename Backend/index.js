const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/compiler', require('./routes/compiler'));

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});