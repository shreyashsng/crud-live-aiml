import React from 'react'
import axios from 'axios'

function Delete() {
    const handelDelete=async(e)=>{
        e.preventDefault()
        const id=e.target.id.value;
        await axios.delete(`https://crud-live-aiml.onrender.com/users/${id}`)
        alert("deleted successfuly!")
    }
  return (
    <div>
      <h1>Delete User</h1>
      <form onSubmit={handelDelete}>
        <input type="text" name="id" placeholder="Enter only ID"/>
        <button type="submit">Delete</button>
      </form>
    </div>
  )
}

export default Delete
