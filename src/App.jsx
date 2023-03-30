import { useState } from "react"
import "./app.css"
import FormInput from "./components/FormInput"

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  })

  const inputs = [
    {
      id:1,
      name: "username",
      type: "text",
      placeholde: "Username",
      label: "Username"
    },
    {
      id:2,
      name: "email",
      type: "text",
      placeholde: "Email",
      label: "Email"
    },
    {
      id:3,
      name: "birthday",
      type: "text",
      placeholde: "Birthday",
      label: "Birthday"
    },
    {
      id:4,
      name: "password",
      type: "password",
      placeholde: "Password",
      label: "Password"
    },
    {
      id:5,
      name: "confirmPassword",
      type: "password",
      placeholde: "Confirm Password",
      label: "Confirm Password"
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value })
  }

  console.log(values)
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {inputs.map(input => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
        ))}
        
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App