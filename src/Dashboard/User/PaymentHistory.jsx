import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';

const PaymentHistory = () => {
	const { user } = useAuth();
	const [axiosSecure] = useAxiosSecure();
	const [historyData, setHistoryData] = useState();

	useEffect(() => {
		axiosSecure.get(`/payments/${user?.email}`).then((res) => {
			console.log('from payment history', res.data);
			setHistoryData(res.data);
		});
	}, []);

	return (
		<div className="flex justify-around w-full bg-blue-950 text-white py-3">
			<p>{historyData.email}</p>
			<p>Total Amount: {historyData.price}</p>
			<p>Transaction Id: {historyData.transactionId}</p>
		</div>
	);
};

export default PaymentHistory;
