import React from 'react';
import useAuth from '../../hooks/useAuth';

const SingleClasses = ({ classes }) => {
	// console.log('single classes', classes);
	const { user } = useAuth();
	const { _id, className, instructorName, photoUrl, price, seats } = classes;

	const email = user?.email;
	const handleAddToCart = () => {
		// console.log(items);
		const classItems = {
			className,
			instructorName,
			photoUrl,
			price,
			seats,
			email,
		};

		fetch(`http://localhost:5000/class`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(classItems),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};

	return (
		<div>
			<div className="card w-96 h-[500px] glass">
				<figure>
					<img
						className="h-[250px] w-full"
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
						<button
							onClick={handleAddToCart}
							className="py-2 px-5 text-white text-md duration-500  hover:text-[#0C4B65] hover:bg-[#EFCF4F] hover:rounded-lg bg-[#0C4B65]"
						>
							Select
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleClasses;
