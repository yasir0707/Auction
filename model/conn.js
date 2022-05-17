//  mongodb+srv://yasir:<password>@chat.n9fu8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/auction',
{ useNewUrlParser: true, useUnifiedTopology: true }, 

(err)=>{
    if(err){
          console.log('connection Error...')  
    }
    else{
        console.log('Connection Success')
    }
})

module.exports= mongoose