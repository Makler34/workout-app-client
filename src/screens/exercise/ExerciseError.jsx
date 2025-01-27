import Alert from '../../components/Layout/ui/alert/Alert';

const ExerciseError = ({ errors }) => {
	return (
		<div style={{ width: '90%', margin: '0 auto' }}>
			{errors.map(
				(error, index) =>
					error && <Alert key={index} type="error" text={error?.message} />
			)}
		</div>
	);
};

export default ExerciseError;
