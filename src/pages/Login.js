import React, { useContext, useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const navitage = useNavigate()
  
    const {dispatch} = useContext(AuthContext)
  
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            dispatch({type:"LOGIN", payload:user})
            navitage("/")
        })
        .catch((error) => {
            setError(true);
        });
    };
  
    return (
        <div className="login d-flex flex-column">
            <h2 className='pb-5'>Login</h2>
            <form onSubmit={handleLogin}>
                <h3>Email:</h3>
                <input
                    type="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <h3>Password:</h3>
                <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                {error && <span>Wrong email or password!</span>}
            </form>
        </div>
    );
  };
  
  export default Login;
  