import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import SectionTitle from '../../../components/SectionTitle';
import {
	FaFacebook,
	FaInstagram,
	FaLaptopCode,
	FaLinkedin,
	FaMusic,
	FaStar,
	FaTwitter,
} from 'react-icons/fa';

const Instructors = () => {
	const { user } = useAuth();
	const [instructors, setInstructors] = useState([]);

	useEffect(() => {
		fetch(
			'https://final-assignment-server-virid.vercel.app/users/instructors'
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setInstructors(data);
			});
	}, []);

	const homeInstructors = instructors.slice(0, 4);

	return (
		<div className="">
			<SectionTitle
				heading="Popular Instructors"
				subHeading="Instructors"
			></SectionTitle>

			<div className="custom-container">
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-20">
					{homeInstructors.map((instructor) => (
						<>
							<div className="text-center md:mx-0 mx-3 mb-7 p-5 rounded-md bg-white boxShadow2 boxShadow hover:bg-[#0C4B65] hover:text-white duration-500">
								<div className="flex justify-center items-center relative overflow-hidden">
									<img
										className="w-[250px] h-[250px] rounded-full border-4 border-transparent hover:border-[#C25934] transition duration-500 p-1"
										src={instructor.photo}
										alt=""
									/>
								</div>

								<h3 className="text-2xl text-center font-bold text-[#C25934] pt-3">
									{instructor.name}
								</h3>
								<p className="text-center font-bold ">
									{instructor.expert} Expert
								</p>

								<div className="flex justify-center items-center pt-4">
									<div className="w-14 h-2 border-t-[3px] border-[#C25934]"></div>
								</div>
								<p className="flex justify-evenly items-center pt-3">
									<FaFacebook className="text-xl border rounded-full w-8 h-8 p-1 hover:bg-[#C25934] hover:border-none"></FaFacebook>
									<FaInstagram className="text-xl border rounded-full w-8 h-8 p-1 hover:bg-[#C25934] hover:border-none"></FaInstagram>
									<FaTwitter className="text-xl border rounded-full w-8 h-8 p-1 hover:bg-[#C25934] hover:border-none"></FaTwitter>
									<FaLinkedin className="text-xl border rounded-full w-8 h-8 p-1 hover:bg-[#C25934] hover:border-none" />
								</p>
								<div className="flex justify-between items-center pt-1">
									<p className="flex justify-center items-center">
										<FaStar className="text-[#C25934] mr-1" />{' '}
										4.8 (12K)
									</p>
									<p className="flex justify-center items-center">
										{' '}
										<FaMusic className="text-[#C25934] mr-1" />{' '}
										12 Courses
									</p>
								</div>
							</div>
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default Instructors;
