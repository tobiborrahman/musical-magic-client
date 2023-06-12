import React from 'react';
import Swal from 'sweetalert2';

const SingleSelectedClasses = ({ classes }) => {
	const { _id, className, instructorName, price } = classes;

	const handleDelete = (id) => {
		fetch(`https://final-assignment-server-virid.vercel.app/class/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.deletedCount > 0) {
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: 'Class has deleted successfully',
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

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
								<button
									onClick={() => handleDelete(_id)}
									className="py-1 px-3 text-xl duration-700 rounded-md hover:text-[#0C4B65] hover:bg-[#EFCF4F] border border-[#EFCF4F]"
								>
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
