// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCw9r6b_bBEYJtrFvINHdLN9Zi9I9oH66A',
	authDomain: 'final-photography-client.firebaseapp.com',
	projectId: 'final-photography-client',
	storageBucket: 'final-photography-client.appspot.com',
	messagingSenderId: '559250836451',
	appId: '1:559250836451:web:90ea0d9575147dc48d2ed6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
