import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';

const Instructors = () => {
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
				heading="All the instructors"
				subHeading="Instructors"
			></SectionTitle>

			<div className="flex  gap-5 mb-20">
				{instructors.map((instructor) => (
					<>
						<div className="">
							<img
								className="w-[200px] h-[200px] rounded-full border p-2 hover:border-[10px] hover:border-[#EFCF4F] hover:p-2 duration-500"
								src={instructor.image}
								alt=""
							/>

							<h3 className="text-2xl text-center font-bold text-[#C25934]">
								{instructor.instructorName}
							</h3>
							<p className="text-center font-bold text-[#0C4B65]">
								{instructor.email}
							</p>
						</div>
					</>
				))}
			</div>
		</div>
	);
};

export default Instructors;
