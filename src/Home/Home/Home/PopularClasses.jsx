import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaUsers } from 'react-icons/fa';
import { MdPayments } from 'react-icons/md';

const PopularClasses = () => {
	const [popularClasses, setPopularClasses] = useState([]);
	const [axiosSecure] = useAxiosSecure();

	useEffect(() => {
		axiosSecure.get('/approvedClasses').then((res) => {
			setPopularClasses(res.data);
		});
	}, []);

	const homeClasses = popularClasses.slice(0, 6);

	return (
		<div className="pb-20 my-10">
			<SectionTitle
				heading="Most Popular Classes"
				subHeading="Our Classes"
			></SectionTitle>

			<div className="custom-container">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-10 mx-3 mt-2">
					{homeClasses.map((classes) => (
						<>
							<div className="md:w-[380px] rounded-lg boxShadow border-b-[3px] border-b-[#C25934] ">
								<figure className="relative rounded-t-lg overflow-hidden group">
									<img
										className="w-full h-[300px] "
										src={classes.classes.photoUrl}
										alt="car!"
									/>
									<div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<button className="rounded-full transform  origin-center transition-transform duration-500 translate-y-10 group-hover:translate-y-0 relative border-2 border-[#C25934] bg-transparent py-2.5 px-8 font-medium uppercase text-white  before:absolute before:rounded-full before:left-0 before:top-0 before:-z-10 before:h-full before:w-full  before:origin-top-left before:scale-x-0 before:bg-[#C25934] before:transition-transform before:duration-300 before:content-['']  before:hover:scale-x-100">
											Details
										</button>
									</div>
								</figure>

								<div className="p-5">
									<h2 className="text-2xl pb-2 text-[#C25934] font-bold">
										{classes.classes.className}{' '}
										<span className="text-[#0C4B65]">
											Classes
										</span>
									</h2>

									<div>
										<div className="flex justify-between items-center">
											<h3 className="text-xl flex items-center">
												<FaUsers className="mr-2" />{' '}
												{classes.classes.seats} Students
											</h3>
											<h3 className="text-xl flex items-center">
												<MdPayments className="mr-2" />{' '}
												{parseFloat(
													classes.classes.price
												)}
												$
											</h3>
										</div>
									</div>
								</div>
							</div>
						</>
					))}
				</div>
				<div className="flex justify-center items-center">
					<button className="rounded-full transform  origin-center transition-transform duration-500 translate-y-10 group-hover:translate-y-0 relative border-2 border-[#C25934] bg-transparent py-2.5 px-8 font-medium uppercase text-[#C25934]  before:absolute before:rounded-full before:left-0 before:top-0 before:-z-10 before:h-full before:w-full  before:origin-top-left before:scale-x-0 before:bg-[#C25934] before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
						All Courses
					</button>
				</div>
			</div>
		</div>
	);
};

export default PopularClasses;
