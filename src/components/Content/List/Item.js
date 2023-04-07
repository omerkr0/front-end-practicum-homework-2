import React from 'react'
import { useTodo } from '../../../contexts/TodoContext'

function Item({ todo }) {
  const { toggleTodo, destroyTodo } = useTodo() // get the toggleTodo and destroyTodo functions from the useTodo hook

  const onChange = (id) => toggleTodo(id) // set up a function to toggle a todo item's completed status
  const onDestroy = (id) => destroyTodo(id) // set up a function to delete a todo item

  return (
    //render a list item with a class of 'completed' if the todo item is completed
    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed} // set the checkbox as checked if the todo item is completed
          onChange={() => onChange(todo.id)} // call the onChange function to toggle the todo item's completed status when the checkbox is clicked
        />
        <label>{todo.text}</label>
        {/* render a delete button that calls the onDestroy function when clicked */}
        <button className="destroy" onClick={() => onDestroy(todo.id)} />
      </div>
    </li>
  )
}

export default Item
