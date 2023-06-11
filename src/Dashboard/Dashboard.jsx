import React, { useInsertionEffect } from 'react';
import {
	FaBook,
	FaBookOpen,
	FaDollarSign,
	FaHome,
	FaUsers,
} from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {
	// const isAdmin = true;
	// const isInstructor = false;

	const [isAdmin] = useAdmin();
	const [isInstructor] = useInstructor();

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
			<div className="drawer-side bg-[#0C4B65]">
				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
				<ul className="menu p-4 w-64 h-full bg-[#0C4B65] text-white">
					{/* Sidebar content here */}
					{isAdmin && (
						<>
							<li>
								<Link to="/dashboard/adminHome">
									<FaHome></FaHome> Admin Home
								</Link>
							</li>
							<li>
								<Link to="/dashboard/manageClasses">
									<FaBookOpen></FaBookOpen> Manage Classes
								</Link>
							</li>
							<li>
								<Link to="/dashboard/manageUsers">
									<FaUsers></FaUsers> Manage Users
								</Link>
							</li>
						</>
					)}

					{isInstructor && (
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
					)}

					{!isAdmin && !isInstructor && (
						<>
							<li>
								<Link to="/dashboard/userHome">
									<FaHome></FaHome> User Home
								</Link>
							</li>
							<li>
								<Link to="/dashboard/classes">
									<FaBook></FaBook> My Selected Classes
								</Link>
							</li>
							<li>
								<Link to="/dashboard/enrolledClasses">
									<FaBookOpen></FaBookOpen> My Enrolled
									Classes
								</Link>
							</li>
							<li>
								<Link to="/dashboard/paymentHistory">
									<FaDollarSign></FaDollarSign> Payment
									History
								</Link>
							</li>
						</>
					)}

					<div className="divider"></div>

					<li>
						<Link to="/">
							<FaHome></FaHome> Home
						</Link>
					</li>
					<li>
						<Link to="/classes">
							<FaBook></FaBook> Available Classes
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
