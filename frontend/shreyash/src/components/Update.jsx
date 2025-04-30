import React from 'react'
import axios from 'axios'

function Update() {
    const handelUpdate=async(e)=>{
        const id=e.target.id.value;
        const name=e.target.name.value;
        const age=e.target.age.value;
        const data={name,age};

        await axios.put(`http://localhost:9000/users/${id}`,data)
        alert("Updated!")
    }
  return (
    <div style={{border: '2px solid red', padding:'10px'}}>
      <h1>Update Users</h1>
      <form onSubmit={handelUpdate}>
        <label>ID: <input type="text" name="id"/></label>
        <label>NAME: <input type="text" name="name"/></label>
        <label>AGE: <input type="text" name="age"/></label>
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default Update
