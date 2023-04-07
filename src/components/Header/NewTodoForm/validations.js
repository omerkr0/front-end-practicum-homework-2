import * as Yup from 'yup'

// Define a validation schema using the Yup library
const validations = Yup.object().shape({
  // Validate that the "text" field is a required string
  text: Yup.string().required('Text is a required field'),
})

export default validations
