const express = require('express');
const Todo = require('../models/Todo'); //importing the Mongoose Dir

const router = express.Router();

//To Create a New Todo Task!
router.post('/', async(req, res)=>{
    try{                             //try catch is a error handeling middleware.
        const todo = new Todo({
            text: req.body.text, //Performing a DOM feature 
        });
        await todo.save();  //awaiting till we get the input from the above function 
        res.status(201).json(todo);
      } catch (e){
        res.status(400).send({msg:"Oops a Error!"})
    }
});

//To Get All Todos
router.get('/', async(req, res)=>{
    try {
        const todos = await Todo.find();
        if (!todos){
            return res.status(404).json({msg:"No Todos Found!"})
        };
        res.status(200).json(todos);
    } 
    catch (e) {
        res.status(400).send({msg:"error!"})
    }
});

//to Update a Todo
router.put('/:id', async(req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!todo){
            return res.status(404).json({msg:"There is No Todo To be Updated "})
        };
        res.status(200).json(todo);
    } 
    catch(e) {
        res.status(200).send({msg:"Sorry, There was a error"});
    }
});

//To Delete a Todo
router.delete('/:id', async(Req, res) =>{
    try{
        const DeletedTodo = await Todo.findByIdAndDelete(req,params.id);
        if (!DeletedTodo){
            return res.status(404).json({msg:"No Todos To delete!"})
        };
        res.status(200).json({msg: 'Todo Deleted Successfully' });
    }
    catch(e){
        res.status(400).send({msg:"Todo Could not be Deleted, Try Again!"})
    }
});

/* 
***Still in development!!***

To Recover a Deleted Todo  
 router.post('/undo/:id', async (req, res) => {
     try {
         const deletedTodo = await DeletedTodo.findOne({ originalId: req.params.id });
         if (!deletedTodo) {
             return res.status(404).json({ msg: "No deleted todo found with this ID" });
         }
         const restoredTodo = new Todo({
             _id: deletedTodo.originalId,
             text: deletedTodo.text
         });
         await restoredTodo.save();
         await DeletedTodo.deleteOne({ originalId: req.params.id });
         res.status(200).json({ msg: 'Todo restored successfully', todo: restoredTodo });
     } catch (e) {
         res.status(400).send({ msg: "Could not undo deletion, try again!" });
     }
 });
*/

module.exports = router;
