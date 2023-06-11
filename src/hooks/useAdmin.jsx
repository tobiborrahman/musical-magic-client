import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
	const { user, loading } = useAuth();

	const [axiosSecure] = useAxiosSecure();

	const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
		queryKey: ['isAdmin', user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure.get(`/users/admin/${user?.email}`);
			console.log('from use admin', res.data);
			
			return res.data.admin;
		},
	});

	return [isAdmin, isAdminLoading];
};

export default useAdmin;


// const useAdmin = () => {
//     const {user} = useContext(AuthContext);
//     const [axiosSecure] = useAxiosSecure();
//     const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/
// const {user} = useContext(AuthContext);
//     const [axiosSecure] = useAxiosSecure();
//     const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//             console.log('is admin response', res)
//             return res.data.admin;
//         }
//     })
//     return [isAdmin, isAdminLoading]
