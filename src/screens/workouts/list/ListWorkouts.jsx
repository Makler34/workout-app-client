import styles from '../Workout.module.scss';

import Loader from '../../../components/Layout/ui/Loader';

import WorkoutItem from './WorkoutItem';
import useWorkouts from './useWorkouts';
import Layout from '../../../components/Layout/Layout';
import Alert from '../../../components/Layout/ui/alert/Alert';

const ListWorkouts = () => {
	const { mutate, error, isLoading, isSuccess, isSuccessMutate, workoutList } =
		useWorkouts();

	return (
		<>
			<Layout heading="Workout list" bgImage="/images/workout-bg.jpg" />

			<div
				className="wrapper-inner-page"
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{error && <Alert type="error" text={error} />}
				{isSuccessMutate && <Alert text={'Workout log created'} />}
				{isLoading && <Loader />}
				{isSuccess && (
					<div className={styles.wrapper}>
						{(workoutList || []).map(workout => (
							<WorkoutItem
								key={workout.id}
								workout={workout}
								createWorkoutLog={mutate}
							/>
						))}
					</div>
				)}

				{isSuccess && workoutList?.length === 0 && (
					<Alert type="warning" text="workout not found" />
				)}
			</div>
		</>
	);
};

export default ListWorkouts;
