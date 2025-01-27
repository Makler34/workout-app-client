import cn from 'clsx';
import styles from '../Workout.module.scss';

const WorkoutItem = ({ workout, createWorkoutLog }) => {
	return (
		<div key={workout.id} className={cn(styles.item)}>
			<button
				aria-label="create new workout"
				onClick={() => createWorkoutLog(workout.id)}
			>
				<span> {workout.name}</span>
			</button>
		</div>
	);
};

export default WorkoutItem;
