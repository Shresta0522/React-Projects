import React, { useState } from 'react'
import TodoTable from './TodoTable'

function TodoList() {
    const [todoData, setTodoData] = useState('')
    const [todos, setTodos] = useState([])

    const handleSubmit = (e) => {
        setTodos([...todos,todoData])
        setTodoData('')
        e.preventDefault()
    }

    const handleChange = (e) => {
        setTodoData(e.target.value)
    }

    return (
        <div>
            <h1 className="text-3xl  text-center font-bold underline items-center justify-center border-l-2">
                Todo List
            </h1>
            <div className='py-4 mt-4 flex items-center justify-center'>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="task" value={todoData} onChange={handleChange}
                     placeholder="Enter your task" className="p-2 m-2 border-2 rounded-md " />
                    <button type='submit' className="bg-green-800 hover:bg-blue-700 text-white font-semibold py-
                2 px-4 rounded"> Submit</button>
                </form>
            </div>
            <div className='p-6 m-4 '>
                <TodoTable  todos={todos} />

            </div>
        </div>
    )
}

export default TodoList
