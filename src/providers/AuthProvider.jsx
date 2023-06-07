import React, { createContext, useEffect, useState } from 'react';
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import app from '../firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(false);

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
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
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
