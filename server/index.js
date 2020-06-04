import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import router from './router.js';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import reactApp from '../client/src/components/App.jsx';

const app = express();
const port = (80) ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('dev'));

//caches html
app.use(express.static(path.join(__dirname, '../client/dist'),{maxAge:7536000}));

app.use('/', router);

app.listen(port, () => console.log(`app listening at http://localhost:${port}`));

