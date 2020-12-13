require('./connection');// for making the connection with DB
const router=require('express').Router();
const Todo=require('../model/todo');
router.get('/',async(req,res)=>{
    try{
      const todoItems=await Todo.find({});
      res.render('todo.ejs',{todo:todoItems,idTask:undefined});
    }
    catch(e){
        res.send('something went wrong');
    }
})

router.post('/add-todo',async(req,res)=>{
    const {task}=req.body;
    try{
        const todo= new Todo({task});
        await todo.save();
        res.redirect('/');
    }
    catch(e){
        console.log(e);
        res.redirect('/');
    }
})

router.get('/delete/:id',async(req,res)=>{
    const id=req.params.id;
    // console.log(id);
    try{
    const d=await Todo.findByIdAndDelete({_id:id});
         res.redirect('/');
    }
    catch(e)
    {
       console.log(e);
       res.redirect('/');
    }


})


router.get('/edit/:id',(req, res) => {
const id = req.params.id;
Todo.find({}, (err, tasks) => {
    if(!err)
   res.render("todo.ejs", { todo: tasks, idTask: id });
   else
   res.redirect('/');
});
})

router.post('/edit/:id',(req, res) => {
const id = req.params.id;
Todo.findByIdAndUpdate(id, { task: req.body.task}, err => {
if (err) return res.send(500, err);
res.redirect("/");
});
});



module.exports=router;