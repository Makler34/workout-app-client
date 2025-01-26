import { useProfile } from '../../../../screens/profile/useProfile';
import styles from './Statistics.module.scss';

const Statistics = () => {
	const { data } = useProfile();
	return (
		<div className={styles['statistics']}>
			{(data?.statistics || []).map((statistic, idx) => (
				<div key={idx} className={styles['statistics-cell']}>
					<span className={styles['label']}>{statistic.label}</span>
					<span className={styles['value']}>{statistic.value}</span>
				</div>
			))}
		</div>
	);
};

export default Statistics;
