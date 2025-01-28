/* eslint-disable no-unused-vars */
import { FiArrowLeft } from 'react-icons/fi';
import { SlUser } from 'react-icons/sl';
import { useAuth } from '../../../hooks/useAuth';
import styles from './Header.module.scss';
import Hamburger from './hamburger/Hamburger';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { isAuth } = useAuth();

	return (
		<header className={styles['headers']}>
			{pathname !== '/' || !isAuth ? (
				<button
					aria-label="go to profile"
					title="back"
					onClick={() => {
						navigate(isAuth ? -1 : '/auth');
					}}
				>
					{isAuth && <FiArrowLeft color="white" size={29} />}
				</button>
			) : (
				<button
					aria-label="go back"
					onClick={() => {
						navigate('/profile');
					}}
				>
					<SlUser color="white" size={27} />
				</button>
			)}
			{isAuth && <Hamburger />}
		</header>
	);
};

export default Header;
