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




/*
app.get('/api/reviews/:rev_Id', (req,res)=>{
  dbHelpers.getSomeReviews(req.params, (err,result) =>{
    if(err){
      res.status(404).send(err);
    } else {
      //should cached it for around 3 months ~
      res.set('Cache-Control', 'max-age=7536000').status(202).send(result);
    }
  })
});

app.post('/api/reviews/:rev_Id', (req,res)=>{
  dbHelpers.postReview(req.body, (err, result) =>{
    if(err) {
      console.log('Error Adding Review:', err);
      res.status(404).send(err);
    } else {
      res.status(201).send('Added Successfully');
    }
  })
});
*/



//SSR//
//refer to https://stackoverflow.com/questions/44961697/react-express-unexpected-token-in-call-to-rendertostring
//on why i import my server side rendering function
//mainly because of an issue with docker
ssr(app);

//SSR//

app.use('/',express.static(path.join(__dirname, '../client/dist')));
app.use('/', router);

app.listen(port, () => console.log(`😎 listening at http://localhost:${port}`));

