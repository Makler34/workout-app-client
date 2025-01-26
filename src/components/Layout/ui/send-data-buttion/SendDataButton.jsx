import { useState } from 'react';
import cn from 'clsx';
import styles from './SendDataButton.module.scss';

const SendDataButton = () => {
	const [buttonState, setButtonState] = useState('');

	const handleClick = () => {
		setButtonState('onclic');
		setTimeout(() => {
			setButtonState('error');
			setTimeout(() => {
				setButtonState('');
			}, 1250);
		}, 2250);
	};

	return (
		<div className="container">
			<button
				className={cn(styles['send-button'], styles[buttonState])}
				onClick={handleClick}
			></button>
		</div>
	);
};

export default SendDataButton;
