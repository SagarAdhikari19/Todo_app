import React from "react";

import { useState } from "react";


function Input() {

    const [InputTask, setInputTask] = useState("");

    const [list, setList] = useState([]);


    const handleAddTodo = (todo) => {
        const newTask = {
            id: Math.random(),
            todo: todo
        };
        setList([...list, newTask]);
        setInputTask('');
    };
    const handleDeleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    };


    return (<>
        <div className="Top" >
            <input className="input" type="text" placeholder="Enter a task " value={InputTask} onChange={(e) => setInputTask(e.target.value)} />

            <button className="btn" onClick={() => handleAddTodo(InputTask)} >ADD</button>


        </div>
        <ul>
            {list.map((todo) => (
                <li className="task" key={todo.id}>
                    {todo.todo}
                    <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>



    </>);



}



export default Input;