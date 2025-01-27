import { Controller } from 'react-hook-form';
import ReactSelect from 'react-select';
import { useListExercises } from './useListExercises';

const SelectExercises = ({ control }) => {
	const { data = [] } = useListExercises();
	return (
		<Controller
			name="exerciseIds"
			control={control}
			render={({ field: { value, onChange } }) => (
				<ReactSelect
					isMulti
					classNamePrefix="select2-selection"
					value={value}
					onChange={onChange}
					options={data.map(exercise => ({
						value: exercise.id,
						label: exercise.name
					}))}
					placeholder="Exercises..."
				/>
			)}
		/>
	);
};

export default SelectExercises;
