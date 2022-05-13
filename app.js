const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')))
app.get('', (req, res, next) => {
    res.sendFile(__dirname + '/index.html')
});


const server = app.listen(process.env.PORT || 3000, ()=> {
    const port = server.address().port;
    console.log('Server is working on port {}');
});