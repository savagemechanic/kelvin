let todos = []

function addTodo(id,name) {
    const todo = {
        id,
        name,
        completed: false,
    }
    todos.push(todo)
    console.log('Added')
}

function viewTodos() {
    console.log(todos)
}

function editTodo(id, newValue) {
    for (let todo of todos) {
        if (todo.id == id) {
            todo.name = newValue
        }
    }
    console.log('Edited')
}

function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id != id)
    console.log('Deleted')
}

function deleteTodo2(id) {
    todos = todos.filter(function f(todo) {
        return todo.id != id
    })
    console.log('Deleted')
}

function completeTodo(id) {
    for (let todo of todos) {
        if (todo.id == id) {
            todo.completed = true
        }
    }
    console.log('Completed')
}

function completeTodoForEach(id) {
    todos.forEach((todo) => {
        if (todo.id == id) {
            todo.completed = true
        }
    })
    console.log('Completed')
}


addTodo(1,'Kelvin')
viewTodos()
addTodo(2,'Seigha')
viewTodos()
editTodo(2,'Kaptain')
viewTodos()
completeTodoForEach(1)
addTodo(3, 'To be deleted')
viewTodos()
deleteTodo2(3)
viewTodos()