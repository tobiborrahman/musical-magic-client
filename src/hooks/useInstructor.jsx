import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useInstructor = () => {
	const { user, loading } = useAuth();

	const [axiosSecure] = useAxiosSecure();

	const { data: isInstructor, isLoading: isAdminLoading } = useQuery({
		queryKey: ['isInstructor', user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure.get(
				`/users/instructor/${user?.email}`
			);
			console.log('from use instructor', res.data);
			return res.data.admin;
		},
	});

	return [isInstructor, isAdminLoading];
};

export default useInstructor;
