import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,pass})
    }
    
    

  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='UserName' 
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>
        <input type="text" placeholder='Password' 
        value={pass}
        onChange={(e) => setPass(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login