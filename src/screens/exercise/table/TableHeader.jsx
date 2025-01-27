import styles from '../Exercise.module.scss';

const headers = ['Previous', 'Repeat & Weight', 'Completed'];

const TableHeader = () => {
	return (
		<div className={styles.row}>
			{headers.map((header, index) => (
				<div key={index}>
					<span>{header}</span>
				</div>
			))}
		</div>
	);
};

export default TableHeader;
