import { useContext, useState } from "react";

//firebase imports
import {auth} from '../init';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { AuthContext } from "../contexts/AuthContext";

export const useSignup = () => {
	const [error, setError] = useState(null);
	const {dispatch} = useContext(AuthContext)

	const signup = (email, password) =>{

		setError(null);
		createUserWithEmailAndPassword(auth, email, password)
		 .then((res) => {
			dispatch({type: 'LOGIN', payload: res.user})
		 })
		 .catch((err) => {
			 setError(err.message)
		 })	
	}
	return {error, signup}
}