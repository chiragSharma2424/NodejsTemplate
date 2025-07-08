const express = require('express');
const app = express();
const { serverConfig } = require('./config');
const apiRoutes = require('./routes/index.js');

app.use('/api', apiRoutes);


app.listen(serverConfig.PORT, () => {
    console.log(`server started on ${serverConfig.PORT}`);
});