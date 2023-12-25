import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import useAuth from '../../hooks/useAuth';

const Instructors = () => {
	const [instructors, setInstructors] = useState([]);

	useEffect(() => {
		fetch(
			'https://final-assignment-server-virid.vercel.app/users/instructors'
		)
			.then((res) => res.json())
			.then((data) => {
				setInstructors(data);
			});
	}, []);

	return (
		<div className="px-20">
			<SectionTitle
				heading="All the Instructors"
				subHeading="Instructors"
			></SectionTitle>

			<div className="gap-5 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				{instructors.map((instructor) => (
					<>
						<div>
							<div className="flex justify-center items-center">
								<img
									className="w-[200px] h-[200px] rounded-full border p-2 hover:border-[10px] hover:border-[#EFCF4F] hover:p-2 duration-500"
									src={instructor.photo}
									alt=""
								/>
							</div>

							<h3 className="text-2xl text-center font-bold text-[#C25934]">
								{instructor.name}
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
