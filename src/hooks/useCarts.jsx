import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useCarts = () => {
	const { user, loading } = useAuth();
	// console.log(user?.email);
	const [axiosSecure] = useAxiosSecure();

	const { refetch, data: cart = [] } = useQuery({
		queryKey: ['class'],
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure(`/class`);
			console.log(res.data);
			return res.data;
		},
	});

	return [refetch, cart];
};

export default useCarts;
