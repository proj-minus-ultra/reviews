import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import router from './router.js';
import ssr from './ssr.js'

const app = express();
const port = (80);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('dev'));

//SSR//
//refer to https://stackoverflow.com/questions/44961697/react-express-unexpected-token-in-call-to-rendertostring
//on why i import my server side rendering function
//mainly because of an issue with docker
ssr(app);

//SSR//

app.use('/',express.static(path.join(__dirname, '../client/dist')));
app.use('/', router);

app.listen(port, () => console.log(`😎 listening at http://localhost:${port}`));

