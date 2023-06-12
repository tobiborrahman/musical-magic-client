import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import { Navigate } from 'react-router-dom';

const SingleClasses = ({ classes }) => {
	const { user } = useAuth();
	const { _id, className, instructorName, photoUrl, price, seats } = classes;
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);

	const email = user?.email;

	const [isAdmin] = useAdmin();
	const [isInstructor] = useInstructor();

	const handleUser = () => {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: `Please login to purchase`,
			showConfirmButton: false,
			timer: 1500,
		});
		<Navigate to="/login"></Navigate>;
	};

	const handleAddToCart = () => {
		if (!isButtonDisabled) {
			setIsButtonDisabled(true);

			const classItems = {
				className,
				instructorName,
				photoUrl,
				price,
				seats,
				email,
			};

			fetch(`https://final-assignment-server-virid.vercel.app/class`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(classItems),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.insertedId) {
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: `Class added to cart`,
							showConfirmButton: false,
							timer: 1500,
						});
					}
				});
		}
	};

	return (
		<div>
			<div className="card w-96 h-[500px] glass">
				<figure>
					<img
						className="h-[250px] w-full hover:scale-150 overflow-hidden duration-500"
						src={photoUrl}
						alt="car!"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title text-[#C25934] font-bold">
						{className}{' '}
						<span className="text-[#0C4B65]">classes</span>
					</h2>
					<p className="text-[#0C4B65] text-2xl">
						Instructor:{' '}
						<span className="text-[#EFCF4F]">{instructorName}</span>
					</p>

					<p className="text-[#0C4B65]">Available Seats: {seats}</p>

					<div className="card-actions flex justify-between items-center">
						<div>
							<h3 className="card-title">From {price}$</h3>
						</div>

						{user ? (
							<button
								onClick={() => handleAddToCart()}
								className="py-2 px-5 text-white text-md duration-500 hover:text-[#0C4B65] hover:bg-[#EFCF4F] hover:rounded-lg bg-[#0C4B65]"
							>
								Select
							</button>
						) : (
							<button
								onClick={handleUser}
								className="py-2 px-5 text-white text-md duration-500 hover:text-[#0C4B65] hover:bg-[#EFCF4F] hover:rounded-lg bg-[#0C4B65]"
							>
								Select
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleClasses;
