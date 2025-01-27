import cn from 'clsx';

import stylesLayout from '../../components/Layout/Layout.module.scss';
import Header from '../../components/Layout/header/Header';

import styles from './Exercise.module.scss';
import { getIconFromServer } from '../../utils';

const HeaderExerciseLog = ({ isSuccess, exerciseLog }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/ex-bg-1.jpg')`,
				height: 300
			}}
		>
			<Header
				backLink={
					isSuccess ? `/workout/${exerciseLog.workoutLog}` : '/workouts'
				}
			/>
			{isSuccess && (
				<div className={styles.heading}>
					<img
						src={getIconFromServer(exerciseLog.Exercise.iconPath)}
						height="34"
						alt=""
						draggable={false}
					/>
					<h1 className={stylesLayout.heading}>{exerciseLog.Exercise.name}</h1>
				</div>
			)}
		</div>
	);
};

export default HeaderExerciseLog;
