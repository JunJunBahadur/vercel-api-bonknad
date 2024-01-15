const express = require('express');
const Router = require('./routes');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const url = process.env.MONGO_ID;

mongoose.connect(url)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    });

app.use(Router);
app.listen(3000, () => {
    console.log('Server at port 3000');
});