import styles from './Statistics.module.scss';

const Statistics = () => {
	const statisticsData = [
		{
			label: 'Minutes',
			value: 20
		},
		{
			label: 'Workouts',
			value: 'Hard'
		},
		{
			label: 'Kgs',
			value: '5%'
		}
	];

	return (
		<div className={styles['statistics']}>
			{(statisticsData || []).map((statistic, idx) => (
				<div key={idx} className={styles['statistics-cell']}>
					<span className={styles['label']}>{statistic.label}</span>
					<span className={styles['value']}>{statistic.value}</span>
				</div>
			))}
		</div>
	);
};

export default Statistics;
