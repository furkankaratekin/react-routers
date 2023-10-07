import {useEffect,useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';



function User() {
    const {id} = useParams();
    const [user,setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => setUser(res.data));
    }, [])

  return (
    <div>
        <h1>User Detail</h1>
        <h3 onClick={() => navigate("/users")}>
            Diğer kullanıcılara Geri dönmek için Tıklayınız.
        </h3>
        <code>{JSON.stringify(user, null)}</code>
    </div>
  )
}


export default User
