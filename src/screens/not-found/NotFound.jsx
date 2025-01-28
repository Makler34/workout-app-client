import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';

const NotFound = () => {
	const { isAuth } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuth) {
			navigate('/auth');
		}
	});

	return (
		<Layout heading="Not found">
			<div className="wrapper-inner-page">404 page not found</div>
		</Layout>
	);
};

export default NotFound;
