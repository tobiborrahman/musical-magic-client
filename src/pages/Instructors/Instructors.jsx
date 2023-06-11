import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import useAuth from '../../hooks/useAuth';

const Instructors = () => {
	const { user } = useAuth();
	const [instructors, setInstructors] = useState([]);
	useEffect(() => {
		fetch('PopularInstructors.json')
			.then((res) => res.json())
			.then((data) => {
				// setInstructors(data);
			});
	}, []);

	useEffect(() => {
		fetch('http://localhost:5000/users/instructors')
			.then((res) => res.json())
			.then((data) => {
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
								src={user?.photoURL}
								alt=""
							/>

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
