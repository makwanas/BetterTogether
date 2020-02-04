const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const path = require('path');

const app = express();

//Body Parser Middleware

app.use(express.json());

//DB Config

const db = config.get('mongoURI');

//Connect to MonogoDB
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    }) // Adding new Mongo url parser
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

//Use Routes

app.use('/api/events', require('./routes/api/events'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });

}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
