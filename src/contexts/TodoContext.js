// Import statements for necessary libraries and functions
import React, { createContext, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

// Create a new context for the Todo app
const TodoContext = createContext()

// Define a new component as a context provider for the Todo app
export const TodoProvider = ({ children }) => {
  // Initialize state for the filter and the list of todos
  const [filter, setFilter] = useState('all')
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Learn React',
      completed: true,
    },
    {
      id: 2,
      text: 'Learn Next',
      completed: false,
    },
  ])

  // Function for adding a new todo item to the list
  const addTodo = (text) =>
    setTodos((prev) => [...prev, { id: uuidv4(), completed: false, text }])

  // Function for toggling the completion status of a todo item
  const toggleTodo = (id) => {
    const cloned_todos = [...todos]

    const itemIndex = cloned_todos.findIndex((todo) => todo.id === id)
    const item = todos[itemIndex]
    item.completed = !item.completed

    setTodos(cloned_todos)
  }

  // Function for removing a todo item from the list
  const destroyTodo = (id) => {
    const cloned_todos = [...todos]

    const itemIndex = cloned_todos.findIndex((todo) => todo.id === id)
    cloned_todos.splice(itemIndex, 1)

    setTodos(cloned_todos)
  }

  // Define the values to be passed to the context provider
  const values = {
    todos,
    setTodos,
    addTodo,
    toggleTodo,
    destroyTodo,
    filter,
    setFilter,
  }

  // Return the context provider with the defined values and child components
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
}

// Custom hook for accessing the TodoContext from other components
export const useTodo = () => {
  const context = useContext(TodoContext)

  // Throw an error if the useTodo hook is used outside of the TodoProvider component
  if (context === undefined) {
    throw new Error('useTodo hook must be called inside TodoProvider component')
  }

  // Return the context object
  return context
}
