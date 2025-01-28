import { useParams } from 'react-router-dom';
import styles from '../Workout.module.scss';
import stylesLayout from '../../../components/Layout/Layout.module.scss';
import Header from '../../../components/Layout/header/Header';
import cn from 'clsx';

import ExerciseItem from './ExerciseItem';
import Loader from '../../../components/Layout/ui/Loader';
import { Fragment } from 'react';
import Button from '../../../components/Layout/ui/button/Button';
import { useWorkout } from './useWorkout';
import ExerciseError from '../../../components/Layout/ui/error/ExerciseError';

const Workout = () => {
	const { id } = useParams();
	const {
		completeWorkout,
		error,
		errorCompleted,
		isLoading,
		isSuccess,
		workoutLog
	} = useWorkout();

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/workout-bg.jpg')`,
					height: 356
				}}
			>
				<Header />
				{isSuccess && (
					<div>
						<time className={styles.time}>{workoutLog.minutes + ' min.'}</time>
						<h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
					</div>
				)}
			</div>
			<div
				className="wrapper-inner-page"
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<ExerciseError errors={[error, errorCompleted]} />
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						{workoutLog?.exerciseLogs.map((exerciseLog, index) => (
							<Fragment key={exerciseLog.id}>
								<ExerciseItem exerciseLog={exerciseLog} />
								{index % 2 !== 0 &&
									index !== workoutLog?.exerciseLogs.length - 1 && (
										<div className={styles.line}></div>
									)}
							</Fragment>
						))}
					</div>
				)}

				{!workoutLog?.isCompleted && (
					<Button clickHandler={() => completeWorkout(id)}>
						{'Завершить тренировку'}
					</Button>
				)}
			</div>
		</>
	);
};

export default Workout;
