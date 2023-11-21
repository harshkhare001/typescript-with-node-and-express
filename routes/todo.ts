import {Router} from 'express';
import {Todo} from '../models/todo';

const router = Router();

let todo:Todo[] =[];

router.get('/', (req, res, next)=>{
    res.status(200).json({todo:todo});
})

router.post('/', (req,res,next)=>{
    const newTodo = {
        id : new Date().toISOString(),
        text : req.body.text
    };

    todo.push(newTodo);
    res.status(200).json({message:"added", todo:todo, new:newTodo});
})

router.put('/todo/:todoId', (req,res,next)=>{
    const tid = req.params.todoId;
    const todoIndex = todo.findIndex(todoItem => todoItem.id === tid );
    if(todoIndex >=0)
    {
        todo[todoIndex] = {id: todo[todoIndex].id, text:req.body.text};
        return res.status(200).json({message: 'updated', success:true, todo:todo})
    }

    res.status(404).json({message : 'not found'})
})

router.delete('/todo/:todoId',(req,res,next)=>{
    todo = todo.filter(todoItem => todoItem.id === req.params.todoId);
    res.status(200).json({message: 'deleted', todo:todo});
})

export default router;
