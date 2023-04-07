import React from 'react'
import { useTodo } from '../contexts/TodoContext'

function ContentFooter() {
  // Accessing state and functions from TodoContext
  const { todos, filter, setFilter, setTodos } = useTodo()

  // Function to remove completed todos from the list
  const clearCompleted = () =>
    setTodos((prev) => prev.filter((todo) => !todo.completed))

  return (
    <footer className="footer">
      {/* Displaying the number of incomplete todos */}
      <span className="todo-count">
        <strong>{todos.length} </strong>
        item{todos.length > 1 && 's'} left
      </span>
      {/* Filter options to display all, active, or completed todos */}
      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'selected' : ''}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setFilter('active')}
            className={filter === 'active' ? 'selected' : ''}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setFilter('completed')}
            className={filter === 'completed' ? 'selected' : ''}
          >
            Completed
          </a>
        </li>
      </ul>
      {/* Button to clear all completed todos */}
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

export default ContentFooter
