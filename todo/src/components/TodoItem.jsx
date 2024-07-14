import { useState } from "react"

export default function TodoItem({item, todos, setTodos}) {
    let done = false;
    function handleDelete(e) {
        console.log("Deleting a task name");
        setTodos(todos.filter((todo) => item.name!==todo.name))
    }
    function handleClick(name) {
        setTodos(todos.map((todo) => todo.name==name?todo.done=true:todo))
    }
    const completed = done == true? "completed": ""
    return (
        <div>
            <p onClick={handleClick}>{item.name}</p>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}