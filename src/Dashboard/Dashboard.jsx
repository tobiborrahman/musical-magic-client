import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
// import useRoles from '../hooks/useRoles';

const Dashboard = () => {
	const isAdmin = true;
	const isInstructor = false;
	const isUser = false;
	// const [isAdmin, isInstructor, isUser] = useRoles();
	// if (isAdminLoading || isInstructorLoading || isUserLoading) {
	// 	return <span className="loading loading-ring loading-lg"></span>;
	// }
	return (
		<div className="drawer lg:drawer-open">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col items-center justify-center">
				{/* Page content here */}
				<label
					htmlFor="my-drawer-2"
					className="btn btn-primary drawer-button lg:hidden"
				>
					Open drawer
				</label>
				<Outlet></Outlet>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
				<ul className="menu p-4 w-64 h-full bg-base-200 text-base-content">
					{/* Sidebar content here */}
					{isAdmin ? (
						<>
							<li>
								<Link to="/dashboard/adminHome">
									<FaHome></FaHome> Admin Home
								</Link>
							</li>
							<li>
								<Link to="/dashboard/manageClasses">
									<FaHome></FaHome> Manage Classes
								</Link>
							</li>
							<li>
								<Link to="/dashboard/manageUsers">
									<FaHome></FaHome> Manage Users
								</Link>
							</li>
						</>
					) : isInstructor ? (
						<>
							<li>
								<Link to="/dashboard/adminHome">
									<FaHome></FaHome> Instructor Home
								</Link>
							</li>
							<li>
								<Link to="/dashboard/addClasses">
									<FaHome></FaHome> Add Classes
								</Link>
							</li>
							<li>
								<Link to="/dashboard/myClasses">
									<FaHome></FaHome> My Classes
								</Link>
							</li>
						</>
					) : isUser ? (
						<>
							<li>
								<Link to="/dashboard/userHome">
									<FaHome></FaHome> User Home
								</Link>
							</li>
							<li>
								<Link to="/dashboard/classes">
									<FaHome></FaHome> My Selected Classes
								</Link>
							</li>
							<li>
								<Link to="/dashboard/enrolledClasses">
									<FaHome></FaHome> My Enrolled Classes
								</Link>
							</li>
							<li>
								<Link to="/dashboard/paymentHistory">
									<FaHome></FaHome> Payment History
								</Link>
							</li>
						</>
					) : (
						''
					)}

					<div className="divider"></div>

					<li>
						<Link to="/">
							<FaHome></FaHome> Home
						</Link>
					</li>
					<li>
						<Link to="/classes">
							<FaHome></FaHome> Available Classes
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
