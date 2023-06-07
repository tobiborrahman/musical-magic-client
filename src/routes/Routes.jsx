import { createBrowserRouter } from 'react-router-dom';
import Main from '../Home/Home/Main';
import Home from '../Home/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SighUp/SignUp';
import Instructors from '../pages/Instructors/Instructors';
import PrivateRoute from '../providers/PrivateRoute';
import Classes from '../pages/Classes/Classes';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
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
			{
				path: '/classes',
				element: (
					<PrivateRoute>
						<Classes></Classes>
					</PrivateRoute>
				),
			},
		],
	},
]);

export default router;
