import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

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

			<div className="grid md:grid-cols-3 gap-5 mx-10 mb-20">
				{homeClasses.map((classes) => (
					<>
						<div className="card md:w-96 glass">
							<figure>
								<img
									className="h-[250px] w-full hover:scale-150 overflow-hidden duration-500"
									src={classes.classes.photoUrl}
									alt="car!"
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title text-[#C25934] font-bold">
									{classes.classes.className}{' '}
									<span className="text-[#0C4B65]">
										Classes
									</span>
								</h2>

								<div className="card-actions flex justify-between items-center">
									<div>
										<h3 className="card-title">
											Students: {classes.classes.seats}
										</h3>
										<h3 className="card-title">
											from{' '}
											{parseFloat(classes.classes.price)}$
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

export default PopularClasses;
