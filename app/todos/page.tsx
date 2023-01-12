'use client'
import React from 'react'
import {useState} from 'react'
import Todo from './Todo'

interface Todo {

  date: string
  status: string
  goal: string
}

function Todos() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [date, setDate] = useState('')
    const [status, setStatus] = useState('')
    const [goal, setGoal] = useState('')

    const addTodo = () => {
      let todo = {
        date: date,
        status: status,
        goal: goal
      }
      setTodos([...todos, todo])
    }

  return (
    <>
    <div>OH BROTHER</div>
    <div>
      <h1>Add Todo</h1>
      <input type = "text" placeholder = 'Date' onChange={(e) => setDate(e.target.value)}></input>
      <input type = "text" placeholder = 'Status' onChange={(e) => setStatus(e.target.value)}></input>
      <input type = "text" placeholder = 'Goal' onChange={(e) => setGoal(e.target.value)}></input>
      <button onClick={() => addTodo() }>Add todo</button>

    </div>
    <div>
      {todos.map((todo) => <Todo date={todo.date} status={todo.status} goal={todo.goal} />)}
    </div>
    </>
    
  )
}

export default Todos