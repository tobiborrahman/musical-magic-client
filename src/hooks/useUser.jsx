import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useUser = () => {
	const { user, loading } = useAuth();

	const [axiosSecure] = useAxiosSecure();

	const { data: isUser, isLoading: isAdminLoading } = useQuery({
		queryKey: ['isUser', user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure.get(`/users/user/${user?.email}`);
			console.log(res.data);
			return res.data.admin;
		},
	});

	return [isUser, isAdminLoading];
};

export default useUser;
