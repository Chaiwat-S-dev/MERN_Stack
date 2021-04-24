const express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    // bodyParser = require('body-parser'),
    dbConfig = require('./database/db')

// Express Route
const studentRoute = require('./routes/student.route');

// Connecting MongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Database successfully connected');
},
    error => {
        console.log('Could not connect to database' + error);
    }
)

mongoose.connection.on('error', err => {
    console.error('MongoDB error', err)
});

const app = express();
app.use(express.urlencoded( {extended: true} )); 
app.use(express.json());  
app.use(cors());
app.use('/students', studentRoute);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connect to port : ' + port);
    // console.log(`app listening at http://localhost:${port}`);
});

// 404 Error
app.use((req, res, next) => {
    next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
    console.error('Found error : ' + err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});