const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/index.html')
});

app.listen(3000, () => {
    console.log("App is listening 3000 port");
});