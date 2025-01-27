import { useNavigate } from 'react-router-dom';
import cn from 'clsx';
import styles from '../Workout.module.scss';
import { getIconFromServer } from '../../../utils';

const ExerciseItem = ({ exerciseLog }) => {
	const navigate = useNavigate();

	return (
		<div
			key={exerciseLog.id}
			className={cn(styles.item, {
				[styles.completed]: exerciseLog.isCompleted
			})}
		>
			<button
				aria-label="Move to exercise"
				onClick={() => navigate(`/exercise/${exerciseLog.id}`)}
			>
				<span> {exerciseLog.Exercise.name}</span>
				<img
					src={getIconFromServer(exerciseLog.Exercise.iconPath)}
					alt=""
					draggable={false}
					style={{ borderRadius: 14, height: 35 }}
				/>
			</button>
		</div>
	);
};

export default ExerciseItem;
