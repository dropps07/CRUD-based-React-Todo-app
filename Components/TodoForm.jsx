import React, {useState} from 'react';

const TodoForm = ({ addTodo }) => {
    const [text, settext] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(text);
        settext('');
    };

    return (<form onSubmit={handleSubmit}>
        <input type='text'
        value= {text}
        onChange={(e)=>{
            settext(e.target.value)
        }}
        placeholder='Submit' >Add</input>
    </form>
    );
};

export default TodoForm;