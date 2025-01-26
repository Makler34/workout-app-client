import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';
import Field from '../../components/Layout/ui/field/Field';
import styles from './NewWorkout.module.scss';
import Button from '../../components/Layout/ui/button/Button';
import { useForm } from 'react-hook-form';

const NewWorkout = () => {
	const { isAuth } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuth) {
			navigate('/auth');
		}
	}, [isAuth, navigate]);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	});

	const onSubmit = () => {
		// create
	};

	return (
		<>
			<Layout heading="CREATE NEW WORKOUT" bgImage="/images/auth-bg.png" />
			<div className="wrapper-inner-page">
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
					<div className={styles.wrapperButtons}>
						<Button tabIndex={0} clickHandler={() => {}}>
							Create
						</Button>
					</div>
				</form>

				<Button
					tabIndex={0}
					clickHandler={() => {
						navigate('/new-exercise');
					}}
				>
					nav
				</Button>
			</div>
		</>
	);
};

export default NewWorkout;
