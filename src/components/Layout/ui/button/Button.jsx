import styles from './Button.module.scss';
import cn from 'clsx';

const Button = ({ children, clickHandler, size = 'xl' }) => {
	return (
		<div className={styles['wrapper']}>
			<button
				onClick={clickHandler}
				className={cn(styles.button, styles[size])}
			>
				{children}
			</button>
		</div>
	);
};

export default Button;
