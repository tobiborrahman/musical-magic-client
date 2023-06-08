import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useRoles = () => {
	const { user, loading } = useAuth();

	const [axiosSecure] = useAxiosSecure();

	const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
		queryKey: ['isAdmin', user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure.get(`/users/role/${user?.email}`);
			console.log(res.data.roles);
			const userRoles = res.data.roles;
			return userRoles.includes('admin');
		},
	});

	const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
		queryKey: ['isInstructor', user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure.get(`/users/role/${user?.email}`);
			console.log(res.data);
			const userRoles = res.data.roles;
			return userRoles.includes('admin');
		},
	});

	const { data: isUser, isLoading: isUserLoading } = useQuery({
		queryKey: ['isUser', user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure.get(`/users/role/${user?.email}`);
			console.log(res.data);
			return res.data;
		},
	});

	return [
		isAdmin,
		isAdminLoading,
		isInstructor,
		isInstructorLoading,
		isUser,
		isUserLoading,
	];
};

export default useRoles;
