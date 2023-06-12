import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import SectionTitle from '../../../components/SectionTitle';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

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
		fetch(
			'https://final-assignment-server-virid.vercel.app/users/instructors'
		)
			.then((res) => res.json())
			.then((data) => {
				setInstructors(data);
			});
	}, []);

	return (
		<div>
			<SectionTitle
				heading="Popular Instructors"
				subHeading="Instructors"
			></SectionTitle>

			<div className="md:flex justify-center items-centers gap-5 mb-20">
				{instructors.map((instructor) => (
					<>
						<div className="">
							<img
								className="md:w-[200px] md:h-[200px] rounded-full border p-2 hover:border-[10px] hover:border-[#EFCF4F] hover:p-2 duration-500"
								src={instructor.photo}
								alt=""
							/>

							<h3 className="text-2xl text-center font-bold text-[#C25934]">
								{instructor.name}
							</h3>
							<p className="text-center font-bold text-[#0C4B65]">
								{instructor.email}
							</p>
							<p className="flex justify-evenly items-center mt-2">
								<FaFacebook></FaFacebook>
								<FaInstagram></FaInstagram>
								<FaTwitter></FaTwitter>
							</p>
						</div>
					</>
				))}
			</div>
		</div>
	);
};

export default Instructors;
