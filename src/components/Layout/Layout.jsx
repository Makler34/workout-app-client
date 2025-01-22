import cn from 'clsx';
import Header from './header/Header';
import styles from '../Layout/Layout.module.scss';
import useCheckToken from '../../hooks/useCheckToken';

const Layout = ({ children, heading = '', backLink = '', bgImage }) => {
	useCheckToken();

	return (
		<section
			className={cn(`${styles['wrapper']}`, {
				[styles['otherPage']]: !!heading
			})}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Header backLink={backLink} />
			{heading && <h1 className={styles['heading']}>{heading}</h1>}
			{children}
		</section>
	);
};

export default Layout;
