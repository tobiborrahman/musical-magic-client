import React from 'react';

const SectionTitle = ({ subHeading, heading }) => {
	return (
		<div className="mx-auto text-center my-20">
			<p className="text-[#C25934] text-2xl font-bold ">{subHeading}</p>
			<h3 className="text-[#0C4B65] text-6xl font-extrabold py-2 ">
				{heading}
			</h3>
		</div>
	);
};

export default SectionTitle;
