const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://admin:admin@cluster0.tpwst.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true})
    .then(client => {
        console.log("MangoDB Connected")
        const db = client.db('fylo-database')
        const fyloCollection = db.collection('fylo')

            app.set('view engine', 'ejs')

            //Middlewares and other routes
            app.use(bodyParser.urlencoded({ extended:true }))
            app.use(express.static(path.join(__dirname, 'public')))

            app.get('/', (req, res, next) => {
                res.sendFile(__dirname + '/index.html')
                db.collection('fylo').find().toArray()
                    .then(results => {
                        console.log(results)
                    })
                    .catch(error => console.log.error(error))
            });

            app.post('/sent', (req,res) => {
                fyloCollection.insertOne(req.body)
                .then(result => {
                  res.redirect(`/`)
                  console.log('Data added')
                })
                .catch(error => console.error(error))
            })

            const server = app.listen(process.env.PORT || 3000, ()=> {
                const port = server.address().port;
                console.log(`Server is working on ${port}`);
            });
      })
    .catch(err => console.log(err))

