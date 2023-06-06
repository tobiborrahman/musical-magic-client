import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="flex justify-between items-center shadow-md py-3 text-[#0C4B65]  px-20">
			<div>
				<h2 className="uppercase text-2xl text-[#EFCF4F] font-bold">
					Dream <br />
					<span className="text-[#C25934]">photography</span>
				</h2>
			</div>
			<div className="flex list-none uppercase">
				<li>
					<Link
						className="mr-5 hover:text-[#C25934] font-bold duration-500"
						to="/"
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						className="mr-5 hover:text-[#C25934] font-bold duration-500"
						to="/instructors"
					>
						Instructors
					</Link>
				</li>
				<li>
					<Link
						className="mr-5 hover:text-[#C25934] font-bold duration-500"
						to="/classes"
					>
						Classes
					</Link>
				</li>
				<li>
					<Link
						className="mr-5 hover:text-[#C25934] font-bold duration-500"
						to="/dashboard"
					>
						Dashboard
					</Link>
				</li>
			</div>

			<div>
				<Link to="/login">
					<button className="py-2 px-5 text-white text-2xl duration-700 font-bold hover:text-[#0C4B65] hover:bg-[#EFCF4F] bg-[#0C4B65]">
						Log In
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
