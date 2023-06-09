import { createBrowserRouter } from 'react-router-dom';
import Main from '../Home/Home/Main';
import Home from '../Home/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SighUp/SignUp';
import Instructors from '../pages/Instructors/Instructors';
import PrivateRoute from '../providers/PrivateRoute';
import Classes from '../pages/Classes/Classes';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Dashboard from '../Dashboard/Dashboard';
import SelectedClasses from '../Dashboard/User/SelectedClasses';
import ManageClasses from '../Dashboard/Admin/ManageClasses';
import ManageUsers from '../Dashboard/Admin/ManageUsers';
import AddClasses from '../Dashboard/Instructor/AddClasses';
import MyClasses from '../Dashboard/Instructor/MyClasses';
import Payments from '../Payments/Payments';

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
	{
		path: 'dashboard',
		element: <Dashboard></Dashboard>,
		children: [
			{
				path: 'classes',
				element: <SelectedClasses></SelectedClasses>,
			},

			// Admin routes
			{
				path: 'manageClasses',
				element: <ManageClasses></ManageClasses>,
			},
			{
				path: 'manageUsers',
				element: <ManageUsers></ManageUsers>,
			},

			// instructor routes
			{
				path: 'addClasses',
				element: <AddClasses></AddClasses>,
			},
			{
				path: 'myClasses',
				element: <MyClasses></MyClasses>,
			},

			//  Payments
			{
				path: 'payment',
				element: <Payments></Payments>,
			},
		],
	},
]);

export default router;
