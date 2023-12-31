import React, { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_payment_getway_pk);

const Payments = () => {
	const [selectedClasses, setSelectedClasses] = useState([]);
	console.log(selectedClasses.price);

	const total = selectedClasses?.reduce(
		(sum, item) => parseFloat(item.price) + sum,
		0
	);
	const price = Math.round(total.toFixed(2));
	// console.log('from payment', price);

	useEffect(() => {
		fetch('https://final-assignment-server-virid.vercel.app/class')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setSelectedClasses(data);
			});
	}, []);

	return (
		<div className="w-3/4">
			<div>
				<div>
					<SectionTitle
						subHeading="Process"
						heading="Payment"
					></SectionTitle>
				</div>

				<Elements stripe={stripePromise}>
					<Checkout
						price={price}
						selectedClasses={selectedClasses}
					></Checkout>
				</Elements>
			</div>
		</div>
	);
};

export default Payments;
