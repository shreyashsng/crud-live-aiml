import axios from 'axios'
import { useState, useEffect } from 'react'

const View=()=> {
  const [users,setUsers] = useState([]);
    useEffect(()=>{
      viewData();
    },[])

    const viewData = async()=>{
      const res = await axios.get('https://crud-live-aiml.onrender.com/users');
      console.log(res);
      setUsers(res.data);
    }
  
    
  return (
    <div style={{border:'2px solid red'}}>
      <h1 style={{color:'green'}}>Show Data</h1>
      <table style={{border:'2px solid red', backgroundColor:'greenyellow', width:'100%'}}>
  <thead>
    <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>AGE</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user) => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.age}</td>
      </tr>
    ))}
  </tbody>
</table>


    </div>
  )
}

export default View
