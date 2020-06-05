import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactApp from '../client/src/components/App';
import fs from 'fs';
import path from 'path';


const ssr = (app)=>{
  app.get('^/$', (req,res)=>{
    console.log('Rendering...');
    const App = ReactDOMServer.renderToString(<ReactApp />);

    fs.readFile(path.join(__dirname,'../client/dist/index.html'), 'utf8', (err,data)=>{
      if(err){
        throw err;
        res.status(404).send('Error Finding page:',err);
      }
      console.log('Successfully Rendered From The Server! 👽');
      return res.send(data.replace('<div id="reviews"></div>', `<div id="reviews">${App}</div>`));
    })
  });
};

export default ssr;