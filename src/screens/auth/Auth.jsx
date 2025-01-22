/* eslint-disable no-constant-binary-expression */
/* eslint-disable no-unused-vars */

import Layout from '../../components/Layout/Layout';
import Button from '../../components/Layout/ui/button/Button';
import Field from '../../components/Layout/ui/field/Field';
import Loader from '../../components/Layout/ui/Loader';

import styles from './Auth.module.scss';

import cn from 'clsx';

import useAuthPage from '../../hooks/useAuthPage';

const Auth = () => {
	const {
		errors,
		handleSubmit,
		handleSwitchChange,
		isPending,
		onSubmit,
		register,
		setType,
		authSwitch
	} = useAuthPage();

	return (
		<>
			<Layout
				heading="Sign in"
				backLink="/auth"
				bgImage="/images/auth-bg.png"
			/>
			<div className="wrapper-inner-page">
				{isPending && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name="email"
						register={register}
						options={{
							required: 'Email iis required',
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: 'Please enter a valid email address'
							}
						}}
						type="text"
						placeholder="Enter email"
					/>
					<Field
						error={errors?.password?.message}
						name="password"
						register={register}
						options={{
							required: 'Password iis required'
						}}
						type="password"
						placeholder="Enter password"
					/>
					<div className={styles.wrapperButtons}>
						<Button
							tabIndex={0}
							clickHandler={() => {
								setType('login');
							}}
						>
							Sign in
						</Button>
						<Button tabIndex={0} clickHandler={() => setType('register')}>
							Register
						</Button>
					</div>
					<div>
						<span
							className={cn(styles.switch, {
								[styles['checked']]: authSwitch
							})}
							tabIndex={0}
							onClick={handleSwitchChange}
							onKeyDown={e => {
								if (e.key === ' ') {
									e.preventDefault();
									handleSwitchChange();
								}
							}}
						>
							<span
								className={cn(styles.thumb, {
									[styles['checked']]: authSwitch
								})}
							>
								<input
									type="hidden"
									{...register('switch', {
										required: 'Enabled this switch'
									})}
									value={authSwitch}
								/>
							</span>
						</span>
						{errors?.switch && (
							<div className={styles.error}>{errors?.switch?.message}</div>
						)}
					</div>
				</form>
			</div>
		</>
	);
};

export default Auth;
