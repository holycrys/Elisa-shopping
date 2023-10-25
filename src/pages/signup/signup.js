import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";
import classes from './signup.module.css'

const Signup = () => {
	const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
	const {error, signup} = useSignup()
	 const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password);
		 history.push('/')
  }
    return (
			<div className={classes.login}>
			<section className={classes.auth}>
        <h1>Sign Up</h1> 
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input 
						   type='email' 
							 id='email'
							  required 
								onChange={(e) => setEmail(e.target.value)}
								value={email}
						/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Your Password</label>
            <input 
						   type='password' 
							 id='password' 
							 required 
							 onChange={(e) => setPassword(e.target.value)}
							 value={password}
						/>
          </div>
          <div className={classes.actions}>
             <button>Create Account</button>
						{error && <p>{error}</p>}
          </div>
        </form>
			</section>
    </div>
		)
};
export default Signup;