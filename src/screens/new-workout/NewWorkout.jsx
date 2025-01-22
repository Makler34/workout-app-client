import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';

const NewWorkout = () => {
	const { isAuth } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuth) {
			navigate('/auth');
		}
	}, [isAuth, navigate]);

	return (
		<Layout heading="New workout">
			<div>NewWorkout</div>
		</Layout>
	);
};

export default NewWorkout;
