const mongoose=require('mongoose');
const todoSchema=new mongoose.Schema({
    task:{
        type:"string",
        required:true,
    }
});

module.exports=mongoose.model('Todo',todoSchema);
