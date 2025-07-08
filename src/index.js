const express = require('express');
const app = express();
const { PORT } = require('./config');
const apiRoutes = require('./routes/index.js');

app.use('/api', apiRoutes);


app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
});