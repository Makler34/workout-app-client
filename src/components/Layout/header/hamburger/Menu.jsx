import Cookies from 'js-cookie';
import { menu } from './menu.data';
import styles from './Hamburger.module.scss';
import cn from 'clsx';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';
import { TOKEN } from '../../../../app.constants';

const Menu = ({ isShow }) => {
	const { isAuth, logoff } = useAuth();
	const navigate = useNavigate();

	const logoutHandler = () => {
		if (isAuth) {
			Cookies.remove(TOKEN);
			logoff();
			navigate('/auth');
		}
	};

	return (
		<nav
			className={cn(styles['menu'], {
				[styles['show']]: isShow
			})}
		>
			<ul>
				{menu.map((item, idx) => (
					<li key={`_menu_${idx}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				{isAuth && (
					<li>
						<div role="button" onClick={logoutHandler}>
							Logout
						</div>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Menu;
