import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from '/TodoItem';
import TodoForm from './TodoForm';

const TodoList = () =>{
    const [todos, setTodos] = useState([]);
    useEffect(()=>{
        fetchTodos();
    },[]);

    const fetchTodos = async() =>{
        const response = await axios.get('http://localhost:3000/api/todos');
        setTodos(response.data);
    };
    const addTodo = async(text)=>{
        const response = await axios.post('http://localhost:3000/api/todos',{
            text
        });
        setTodos([...todos, response.data]);
    };
    const updateTodo = async (id, updateTodo) =>{
        const response = await axios.put(`http://localhost:3000/api/todos/${id}`, updateTodo);
        setTodos(todos.map(todo => (todo._id == id? response.data : todo))); //this piece of code here fetches every todos 
    };
    const deleteTodo = async(id) =>{
        await axios.delete(`http://localhost:3000/api/todos/${id}`);
        setTodos(todos.filter(todo => todo._id !==id));
    };
    return (
        <div>
            <h1>Todo List</h1>
            <TodoForm addTodo={addTodo}/>
            {todos.map(todo => (
                <TodoItem
                key={todo._id}
                todo={todo}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo} />
            ))}
        </div>
    );
};

export default TodoList;