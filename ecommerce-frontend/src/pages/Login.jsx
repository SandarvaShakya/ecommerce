import { useRef, useState } from 'react'
import '../styles/Login.css'
import { Link, Navigate, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth } from '../services/fire' 

// The login Page
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const login = async (event) => {
    event.preventDefault()
    await signInWithEmailAndPassword(firebaseAuth, email, password)
    .then(() => {
      navigate('/')
    })
    .catch((error) => {
      setError("Incorrect Email or Password!")
      setTimeout(() => {
        setError('')
      }, 5000)
    })
  }

  return (
    <div className='login-container'>
      {error && <div className="error">
        <img src="/icons/cross.svg" alt="red cross" />
        <p>{error}</p>
      </div>}
      <div className="login flex">
        <div className="login-form">
          <h2 className="login-heading">LOGIN</h2>
          <form onSubmit={login}>
            <div className="login-form-element">
              <label className='login-label'>Email</label>
              <input 
                type="email" 
                placeholder='EG: example@example.com' 
                onChange={(event) => setEmail(event.target.value)}
                required/>
            </div>
            <div className="login-form-element">
              <label className='login-label'>Password</label>
              <input 
                type="password" 
                placeholder='EG: a5r3#rt' 
                onChange={(event) => setPassword(event.target.value)}
                required/>
            </div>
            <input 
              type="submit" 
              value="Login" 
              className="login-btn"
            />
            <p className='signup-text'>Dont't have an account? <Link to="/signup" className="signup-link">Signup Here</Link></p>
          </form>
        </div>
        <div className="login-img-d">
          <h1>The Online Shop</h1>
          <div className="login-img-d-content">
            <h2>Welcome Back</h2>
            <p>
              Access your personalized shopping experience. Login or create an account to manage orders, save your preferences, and enjoy exclusive offers.
            </p>
          </div>
          <img src="/images/login-img-d-1.jpg" alt="abstract art" loading='lazy'/>
        </div>
        <div className="login-img-m">
          <img src="/images/login-img-m.png" alt="human standing" loading='lazy'/>
        </div>
      </div>
    </div>
  )
}

export default Login