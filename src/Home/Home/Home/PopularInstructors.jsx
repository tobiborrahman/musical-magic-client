import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';

const PopularInstructors = () => {
	const [instructors, setInstructors] = useState([]);

	useEffect(() => {
		fetch('PopularInstructors.json')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setInstructors(data);
			});
	}, []);
	return (
		<div>
			<SectionTitle
				heading="Meet Our Instructors"
				subHeading="Our Team"
			></SectionTitle>

			<div className="grid md:grid-cols-3 gap-5 mx-10 mb-20">
				{instructors.map((classes) => (
					<>
						<div className="card w-96 glass" key={classes.price}>
							<figure>
								<img src={classes.image} alt="car!" />
							</figure>
							<div className="card-body">
								<h2 className="card-title text-[#C25934] font-bold">
									{classes.instructorName}{' '}
								</h2>
								<p className="text-[#0C4B65]">
									{classes.description}
								</p>

								<div className="card-actions flex justify-between items-center">
									<div>
										<h3 className="card-title">
											Students: {classes.totalStudents}
										</h3>
									</div>
									<button className="py-2 px-5 text-white text-md duration-500  hover:text-[#0C4B65] hover:bg-[#EFCF4F] hover:rounded-lg bg-[#0C4B65]">
										View Details
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

export default PopularInstructors;
