import { createBrowserRouter } from 'react-router-dom';
import Main from '../Home/Home/Main';
import Home from '../Home/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SighUp/SignUp';
import Instructors from '../pages/Instructors/Instructors';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/signUp',
				element: <SignUp></SignUp>,
			},
			{
				path: '/instructors',
				element: <Instructors></Instructors>,
			},
		],
	},
]);

export default router;
