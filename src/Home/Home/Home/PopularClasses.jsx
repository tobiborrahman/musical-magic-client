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
		<div>
			<SectionTitle
				heading="Most Popular Classes"
				subHeading="Our Classes"
			></SectionTitle>

			<div className="grid md:grid-cols-3 gap-8 mx-10 mb-20 mt-2">
				{homeClasses.map((classes) => (
					<>
						<div className="md:w-[380px] rounded-lg border border-b-[4px] border-b-yellow-300 ">
							<figure className="relative rounded-t-lg overflow-hidden group">
								<img
									className="w-full h-[300px] "
									src={classes.classes.photoUrl}
									alt="car!"
								/>
								<div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<button className="py-2 px-8 rounded-full transform origin-center transition-transform duration-500 translate-y-10 group-hover:translate-y-0 bg-[#EFCF4F] hover:bg-[#C25934]">
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
											{parseFloat(classes.classes.price)}$
										</h3>
									</div>
								</div>
							</div>
						</div>
					</>
				))}
			</div>
		</div>
	);
};

export default PopularClasses;
