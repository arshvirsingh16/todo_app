import React from 'react'

function Todo({date,status,goal}: {date: string, status: string, goal: string}) {
  return (
    <div>
        <h1>Date: {date}</h1>
        <h1>Status: {status}</h1>
        <h1>Goal: {goal}</h1>
    </div>
  )
}

export default Todo