import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_payment_getway_pk);

const Payments = () => {
	return (
		<div className="w-3/4">
			<div>
				<SectionTitle
					subHeading="Process"
					heading="Payment"
				></SectionTitle>

				<Elements stripe={stripePromise}>
					<Checkout></Checkout>
				</Elements>
			</div>
		</div>
	);
};

export default Payments;
