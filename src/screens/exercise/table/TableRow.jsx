import cn from 'clsx';

import styles from '../Exercise.module.scss';
import { useForm } from 'react-hook-form';

const TableRow = ({ item, onChange }) => {
	const { register, getValues } = useForm({
		mode: 'onChange',
		defaultValues: {
			weight: item?.weight || 0,
			repeat: item?.repeat || 0
		}
	});

	return (
		<div
			className={cn(styles.row, {
				[styles.completed]: item.isCompleted
			})}
			key={`time ${item.id}`}
		>
			<div
				className={styles.opacity}
				key={`Prev ${item.id}/${item.prevWeight}`}
			>
				<input type="number" defaultValue={item.prevWeight} disabled />
				<i>kg{item.isCompleted ? '' : ' '}/</i>
				<input type="number" defaultValue={item.prevRepeat} disabled />
			</div>

			<div key={`RepeatWeight ${item.id}/${item.weight}`}>
				<input
					type="tel"
					pattern="[0-9]*"
					name="weight"
					{...register('weight')}
					disabled={item.isCompleted}
				/>
				<i>kg{item.isCompleted && ' '}/</i>
				<input
					type="number"
					name="weight"
					{...register('repeat')}
					disabled={item.isCompleted}
				/>
			</div>

			<div key={`Completed ${item.id}/${item.isCompleted}`}>
				<img
					src={
						item.isCompleted
							? '/images/exercises/check-completed.svg'
							: '/images/exercises/check.svg'
					}
					className={styles.checkbox}
					alt=""
					onClick={() => {
						onChange({
							id: item.id,
							body: {
								...getValues(),
								isCompleted: !item.isCompleted
							}
						});
					}}
					/* onClick={() => {
			 changeState({
				 timeIndex: item.id,
				 key: 'completed',
				 value: !item.isCompleted
			 })
		 }} */
				/>
			</div>
		</div>
	);
};

export default TableRow;
