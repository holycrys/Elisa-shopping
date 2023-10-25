import {auth} from '../init';
import {signOut} from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const useLogout = () => {
	const {dispatch} = useContext(AuthContext)

	const logout = () => {
		signOut(auth)
		  .then(() => {
				dispatch({type: 'LOGOUT'})
			})
			.catch((err) => {
				console.log(err.message)
			})
	}
	return {logout}
}