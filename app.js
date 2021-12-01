import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(cors({ origin: true }));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use( function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

module.exports = app;