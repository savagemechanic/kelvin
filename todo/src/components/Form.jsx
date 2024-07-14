import { useState } from "react"

export default function Form({todos, setTodos}) {
    const [todo, setTodo] = useState({name:"", done:false})
    function handleSubmit(e) {
        e.preventDefault()
        setTodos([...todos, todo])
        setTodo({name:"", done:false})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter New Todo" 
                    onChange={(e) => {setTodo({name:e.target.value, done:false})}}
                    value={todo.name}
                ></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}