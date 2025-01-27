import Layout from '../../components/Layout/Layout';

import Field from '../../components/Layout/ui/field/Field';
import styles from './NewWorkout.module.scss';
import Button from '../../components/Layout/ui/button/Button';
import { useNewWorkout } from './useNewWorkout';
import Alert from '../../components/Layout/ui/alert/Alert';
import Loader from '../../components/Layout/ui/Loader';
import { Link } from 'react-router-dom';
import SelectExercises from './SelectExercises';

const NewWorkout = () => {
	const {
		errors,
		control,
		error,
		isPending,
		isSuccess,
		handleSubmit,
		onSubmit,
		register
	} = useNewWorkout();

	return (
		<>
			<Layout
				heading="CREATE NEW WORKOUT"
				bgImage="/images/new-workout-bg.jpg"
			/>
			<div className="wrapper-inner-page">
				{error && <Alert type="error" text={error?.message} />}
				{isSuccess && <Alert text="Workout created successfully" />}
				{isPending && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name="name"
						register={register}
						options={{
							required: 'Name is required'
						}}
						type="text"
						placeholder="Name"
					/>
					<Link to="/new-exercise" className="dark-link">
						Add new exercise
					</Link>

					<SelectExercises control={control} />

					<div className={styles.wrapperButtons}>
						<Button tabIndex={0} clickHandler={() => {}}>
							Create
						</Button>
					</div>
				</form>
			</div>
		</>
	);
};

export default NewWorkout;
