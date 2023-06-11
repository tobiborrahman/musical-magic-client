import { createBrowserRouter } from 'react-router-dom';
import Main from '../Home/Home/Main';
import Home from '../Home/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SighUp/SignUp';
import Instructors from '../pages/Instructors/Instructors';
import PrivateRoute from '../providers/PrivateRoute';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Dashboard from '../Dashboard/Dashboard';
import SelectedClasses from '../Dashboard/User/SelectedClasses';
import ManageClasses from '../Dashboard/Admin/ManageClasses';
import ManageUsers from '../Dashboard/Admin/ManageUsers';
import AddClasses from '../Dashboard/Instructor/AddClasses';
import MyClasses from '../Dashboard/Instructor/MyClasses';
import Payments from '../Payments/Payments';
import AdminHome from '../Dashboard/Admin/AdminHome';
import InstructorHome from '../Dashboard/Instructor/InstructorHome';
import UserHome from '../Dashboard/User/UserHome';
import AdminRoute from './AdminRoute';
import PaymentHistory from '../Dashboard/User/PaymentHistory';
import ApprovedClasses from '../pages/Classes/approvedClasses';

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
						<ApprovedClasses></ApprovedClasses>
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: 'dashboard',
		element: (
			<PrivateRoute>
				<Dashboard></Dashboard>
			</PrivateRoute>
		),
		children: [
			{
				path: 'classes',
				element: <SelectedClasses></SelectedClasses>,
			},

			// Admin routes
			{
				path: 'AdminHome',
				element: <AdminHome></AdminHome>,
			},
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
				path: 'instructorHome',
				element: <InstructorHome></InstructorHome>,
			},
			{
				path: 'addClasses',
				element: <AddClasses></AddClasses>,
			},
			{
				path: 'myClasses',
				element: <MyClasses></MyClasses>,
			},

			// user routes
			{
				path: 'userHome',
				element: <UserHome></UserHome>,
			},
			{
				path: 'paymentHistory',
				element: <PaymentHistory></PaymentHistory>,
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
