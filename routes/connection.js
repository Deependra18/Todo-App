const mongoose=require('mongoose');
const url=process.env.MONGO_URI;
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false}).then(()=>console.log('db connected successfully'))
.catch((err)=>console.log(err));