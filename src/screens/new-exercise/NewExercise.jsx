import cn from 'clsx';
import Layout from '../../components/Layout/Layout';
import Field from '../../components/Layout/ui/field/Field';
import styles from './NewExercise.module.scss';
import Button from '../../components/Layout/ui/button/Button';
import { Controller } from 'react-hook-form';
import Loader from '../../components/Layout/ui/Loader';
import Alert from '../../components/Layout/ui/alert/Alert';
import { getIconPath } from './image-path.util';
import useCreateExercise from '../../hooks/useCreateExercise';

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back'];

const NewExercise = () => {
	const {
		register,
		handleSubmit,
		errors,
		control,
		onSubmit,
		isPending,
		isSuccess,
		error
	} = useCreateExercise();

	return (
		<>
			<Layout
				heading="CREATE NEW EXERCISE"
				bgImage="/images/new-exercise-bg.jpg"
				backLink="/new-workout"
			/>
			<div className="wrapper-inner-page">
				{error && <Alert type="error" text={error?.message} />}
				{isSuccess && <Alert text="Exercise created" />}
				{isPending && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name="name"
						register={register}
						options={{
							required: 'Name is required'
						}}
						type="text"
						placeholder="Enter name"
					/>
					<Field
						error={errors?.times?.message}
						name="times"
						register={register}
						options={{
							required: 'Times is required'
						}}
						type="number"
						placeholder="Enter times"
					/>
					<Controller
						name="iconPath"
						control={control}
						rules={{
							required: 'Choose a muscle group'
						}}
						render={({ field: { value, onChange } }) => {
							console.log(value);
							return (
								<div className={styles.images}>
									{data.map(name => (
										<img
											key={`ex img ${name}`}
											src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(
												name
											)}`}
											alt={name}
											className={cn({
												[styles.active]: value === getIconPath(name)
											})}
											draggable={false}
											onClick={() => onChange(getIconPath(name))}
										/>
									))}
								</div>
							);
						}}
					/>

					{errors?.iconPath && (
						<div className="error">{errors?.iconPath?.message}</div>
					)}

					<Button tabIndex={0} clickHandler={() => {}}>
						Create
					</Button>
				</form>
			</div>
		</>
	);
};

export default NewExercise;
