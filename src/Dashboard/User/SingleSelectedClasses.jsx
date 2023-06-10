import React from 'react';

const SingleSelectedClasses = ({ classes }) => {
	const { _id, className, instructorName, photoUrl, price, seats } = classes;

	return (
		<div>
			<div className="overflow-x-auto w-full">
				<table className="table">
					{/* head */}

					<div>
						{/* row 1 */}
						<div className="flex justify-between items-center px-10">
							<th>{className}</th>
							<td>{instructorName}</td>
							<td>${parseFloat(price)}</td>
							<td>
								<button className="btn btn-outline btn-sm">
									Delete
								</button>
							</td>
						</div>
					</div>
				</table>
				<div className="divider mt-0 pt-0"></div>
			</div>
		</div>
	);
};

export default SingleSelectedClasses;
