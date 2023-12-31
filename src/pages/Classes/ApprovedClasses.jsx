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

			<div className="grid md:grid-cols-3 gap-5 mx-10 mb-20">
				{allClasses.map((classes) => (
					<SingleClasses
						key={classes._id}
						classes={classes.classes}
					></SingleClasses>
				))}
			</div>
		</div>
	);
};

export default ApprovedClasses;
