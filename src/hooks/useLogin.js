import {auth} from '../init';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';


export const useLogin = () => {
  const [error, setError] = useState(null);
  const {dispatch} = useContext(AuthContext)

	const login = (email, password) =>{
		setError(null);
	
	  signInWithEmailAndPassword(auth, email, password)
		 .then((res) => {
			dispatch({type: 'LOGIN', payload: res.user})
		 })
		 .catch((err) => {
			setError(err.message)
		 })	
		}
		 
	return {error, login}
}
 

 


