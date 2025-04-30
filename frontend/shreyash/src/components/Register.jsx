import React from 'react'
import axios from 'axios'

const Register=()=>{
    const handelRegister=async(e)=>{
        e.preventDefault()
        const user = {
            name:e.target.name.value,
            age:e.target.age.value
        }

        await axios.post(`https://crud-live-aiml.onrender.com/users`,user)
        alert("data successfully saved")
    }

  return (
    <div>
      <h1>CREATE USER</h1>
      <form onSubmit={handelRegister}>
        <label>NAME:</label>
        <input type="text" name="name"/>
        <label>AGE:</label>
        <input type="text" name="age"/>
        <button type="submit">Register User</button>
      </form>
    </div>
  )
}

export default Register
