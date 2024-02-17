import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import SingleClasses from './SingleClasses';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ApprovedClasses = () => {
	const [allClasses, setAllClasses] = useState([]);
	const [axiosSecure] = useAxiosSecure();

	useEffect(() => {
		axiosSecure.get('/approvedClasses').then((res) => {
			setAllClasses(res.data);
		});
	}, []);

	return (
		<div>
			<SectionTitle
				heading="Classes You Can Join"
				subHeading="Our Classes"
			></SectionTitle>

			<div className="custom-container">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
					{allClasses.map((classes) => (
						<SingleClasses
							key={classes._id}
							classes={classes.classes}
						></SingleClasses>
					))}
				</div>
			</div>
		</div>
	);
};

export default ApprovedClasses;
