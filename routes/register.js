const { jsonParser } = require('config/parser');
const express = require('express');
const { jsonp } = require('express/lib/response');
const route = express.Router();
const logs = require('../logs/logs');
const reg =  require('../model/register')
let Request,Response,address,status,message,SDATE,EDATE;

route.post('/register',(req,res)=>{
    console.log('register')
    try{
        Request= JSON.stringify(req.body);
        console.log(Request)
        address =req.originalUrl;
        SDATE = Date.now();



        //   console.log(req.body);
         
        //  console.log(req.originalUrl);
        //  console.log(res.statusMessage);
         console.log(Date.now());
         

        const task =  new reg({
            
            Name:req.body.Admin_Name,
            Number:req.body.Admin_Company,
            Age:req.body.Admin_Email,
            Password:req.body.Admin_Email,
            Role:req.body.Admin_Password,
                
        });
        if(task.save()){
            console.log('save');
            res.status(200).send('Add Register');
            status= res.statusMessage
        }
        else{

            console.log(' not save')
            res.status(400).send('Not Register');
            status= res.statusMessage
        }
    
        EDATE = Date.now();
    }
    
    catch(e){
        status = res.statusMessage;
        message = e
    }
    logs(Request,Response,status,address,message,SDATE,EDATE);

});

module.exports = route;

