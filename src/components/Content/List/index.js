import React from 'react'
import { useTodo } from '../../../contexts/TodoContext'
import Item from './Item'

let filtered = null // initialize a variable for storing the filtered todos

function List() {
  const { todos, filter } = useTodo() // get the todos and filter state values from the useTodo hook

  filtered = todos // set the filtered todos to all todos by default

  if (filter !== 'all') {   // if the filter is not set to 'all'
    filtered = todos.filter((todo) =>
      filter === 'active' ? todo.completed === false : todo.completed === true,
    ) // filter the todos based on the filter value
  }

  return (
    <ul className="todo-list">
      {filtered.map((todo) => (
        <Item key={todo.id} todo={todo} /> // render an Item component for each filtered todo
      ))}
    </ul>
  )
}

export default List
