import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import SingleClasses from './SingleClasses';

const Classes = () => {
	const [instructorClasses, setInstructorClasses] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/addedClasses', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log('set popular classes', data);
				setInstructorClasses(data);
			});
	}, []);

	return (
		<div>
			<SectionTitle
				heading="Classes You Can Join"
				subHeading="Our Classes"
			></SectionTitle>

			<div className="grid md:grid-cols-3 gap-5 mx-10 mb-20">
				{instructorClasses.map((classes) => (
					<SingleClasses
						key={classes._id}
						classes={classes}
					></SingleClasses>
				))}
			</div>
		</div>
	);
};

export default Classes;
