import { useRef, useState } from 'react';
import cn from 'clsx';
import styles from './Chip.module.scss';

const Chip = ({ label, onRemove }) => {
	const [isClosing, setIsClosing] = useState(false);
	const chipRef = useRef(null);

	const handleRemove = () => {
		setIsClosing(true); // Запускаем анимацию закрытия
	};

	const handleAnimationEnd = animationName => {
		if (animationName.includes('closeChip')) {
			if (isClosing) {
				onRemove();
			}
		}
	};

	return (
		<div
			style={{
				backgroundColor: 'chocolate',
				transition: 'width 1s ease-in-out'
			}}
		>
			<div
				ref={chipRef}
				className={cn(styles.chip, {
					[styles.closing]: isClosing
				})}
				onAnimationEnd={e => handleAnimationEnd(e.animationName)}
			>
				{label}
				<span className={styles.close} onClick={handleRemove}>
					&times;
				</span>
			</div>
		</div>
	);
};

const ChipContainer = () => {
	const [chips, setChips] = useState(['React', 'JavaScript', 'SCSS']);

	const removeChip = chip => {
		setChips(prevChips => prevChips.filter(c => c !== chip));
	};

	return (
		<div className={styles['chip-container']}>
			{chips.map((chip, index) => (
				<Chip
					id={index}
					key={chip}
					label={chip}
					onRemove={() => removeChip(chip)}
				/>
			))}
		</div>
	);
};

export default ChipContainer;
