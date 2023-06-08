import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';

const Classes = () => {
	const [popularClasses, setPopularClasses] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/addedClasses', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setPopularClasses(data);
			});
	}, []);

	return (
		<div>
			<SectionTitle
				heading="Classes You Can Join"
				subHeading="Our Classes"
			></SectionTitle>

			<div className="grid md:grid-cols-3 gap-5 mx-10 mb-20">
				{popularClasses.map((classes) => (
					<>
						<div className="card w-96 glass">
							<figure>
								<img src={classes.photoUrl} alt="car!" />
							</figure>
							<div className="card-body">
								<h2 className="card-title text-[#C25934] font-bold">
									{classes.className}{' '}
									<span className="text-[#0C4B65]">
										classes
									</span>
								</h2>
								<p className="text-[#0C4B65] text-2xl">
									Instructor:{' '}
									<span className="text-[#EFCF4F]">
										{classes.instructorName}
									</span>
								</p>

								<p className="text-[#0C4B65]">
									Available Seats: {classes.seats}
								</p>

								<div className="card-actions flex justify-between items-center">
									<div>
										<h3 className="card-title">
											From {classes.price}$
										</h3>
									</div>
									<button className="py-2 px-5 text-white text-md duration-500  hover:text-[#0C4B65] hover:bg-[#EFCF4F] hover:rounded-lg bg-[#0C4B65]">
										Select
									</button>
								</div>
							</div>
						</div>
					</>
				))}
			</div>
		</div>
	);
};

export default Classes;
