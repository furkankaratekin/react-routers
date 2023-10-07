import { useState,useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';


function Users() {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => setUsers(res.data));
    },[])
  return (
    <div>
        <h1>Users</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <Link to={`${user.id}`}>
                        <h3>{user.name}</h3>
                    </Link>
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default Users
