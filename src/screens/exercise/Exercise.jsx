import Loader from '../../components/Layout/ui/Loader';
import HeaderExerciseLog from './HeaderExercise';
import useExercise from './hook/useExercise';
import styles from './Exercise.module.scss';
import TableHeader from './table/TableHeader';
import TableRow from './table/TableRow';
import { useUpdateLogTime } from './hook/useUpdateLogTime';
import { useCompleteLog } from './hook/useCompleteLog';
import ExerciseError from '../../components/Layout/ui/error/ExerciseError';
import Button from '../../components/Layout/ui/button/Button';

const Exercise = () => {
	const { exerciseLog, isSuccess, isLoading, error } = useExercise();
	const { onChangeTimes, errorChange } = useUpdateLogTime();
	const { completeLog, errorCompleted } = useCompleteLog();

	return (
		<>
			<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
			<div
				className="wrapper-inner-page"
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<ExerciseError errors={[error, errorChange, errorCompleted]} />

				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<TableHeader />

						{exerciseLog?.times.map(exercise => (
							<TableRow
								key={exercise.id}
								item={exercise}
								onChange={onChangeTimes}
							/>
						))}
					</div>
				)}

				{!exerciseLog?.isCompleted && (
					<Button clickHandler={() => completeLog({ isCompleted: true })}>
						{'Завершить упражнение'}
					</Button>
				)}
			</div>
		</>
	);
};

export default Exercise;
