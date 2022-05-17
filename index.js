const express = require('express');
const app = express();
const cors = require('cors');
const body = require('body-parser');
const router = express.Router();
const port = 2000 ||process.env.port;

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
  next()}
 );
 app.use(cors());
 app.use(express.json());
 app.use(body.urlencoded({ extended: false }));
app.use(body.json());

app.use('/reg',require('./routes/register'))


// app.use(
//     '/',
//    swaggerUi.serve, 
//    swaggerUi.setup(swaggerDocument),(req,res)=>{
//     res.send('AuctionAPi')
//    });
//   router.use('/ ', (req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(swaggerDocs);
// });
  
  app.listen(port,()=>{console.log(port)});