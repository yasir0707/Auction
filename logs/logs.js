
const logModel = require('../model/log');

const logdata = (req,res,status,address,message,StartDate,EndDate)=>{
 const logtask =  new logModel({
    Request :req,
    Response : res,
    Status :status,
    message : message,
    address : address,
    StartDate : StartDate,
    EndDate :EndDate
 })
 if(logtask.save()){
    console.log('log save')
 }else{

    console.log('log not save')
 }
}


module.exports = logdata;