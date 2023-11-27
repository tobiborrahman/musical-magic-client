import React from 'react';

const SectionTitle = ({ subHeading, heading }) => {
	return (
		<div className="mx-auto text-center py-10">
			<p className="text-[#C25934]  font-bold uppercase">{subHeading}</p>
			<h3 className="text-[#0C4B65] text-6xl font-bold capitalize">
				{heading}
			</h3>
		</div>
	);
};

export default SectionTitle;
