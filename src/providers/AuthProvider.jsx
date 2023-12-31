import React, { createContext, useEffect, useState } from 'react';
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import app from '../firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);

	const provider = new GoogleAuthProvider();

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const googlePopUp = () => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	const updateUserProfile = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			// get and set token
			if (currentUser) {
				axios
					.post(
						'https://final-assignment-server-virid.vercel.app/jwt',
						{
							email: currentUser.email,
						}
					)
					.then((data) => {
						// console.log(data.data.token);
						localStorage.setItem('access-token', data.data.token);
						setLoading(false);
					});
			} else {
				localStorage.removeItem('access-token');
			}
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		loading,
		createUser,
		signIn,
		logOut,
		googlePopUp,
		updateUserProfile,
	};

	return (
		<div>
			<AuthContext.Provider value={authInfo}>
				{children}
			</AuthContext.Provider>
		</div>
	);
};

export default AuthProvider;
