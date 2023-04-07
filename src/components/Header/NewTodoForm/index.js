import React from 'react'
import { Formik, Field, Form } from 'formik'
import validationSchema from './validations'
import { useTodo } from '../../../contexts/TodoContext'

function NewTodoForm() {
  // Get the addTodo function from the TodoContext
  const { addTodo } = useTodo()

  return (
    // Use Formik library to handle form state and validation
    <Formik
      initialValues={{
        text: '',
      }}
      onSubmit={(values, bag) => {
        // Call the addTodo function with the input text value
        addTodo(values.text)

        // Reset the form after submitting
        bag.resetForm()
      }}
      validationSchema={validationSchema} // Use a validation schema to validate the input
    >
      {/* Render the form */}
      <Form>
        <Field
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          id="text"
          name="text"
        />
      </Form>
    </Formik>
  )
}

export default NewTodoForm
