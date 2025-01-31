import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Layout/ui/button/Button';
import styles from './Home.module.scss';
import Statistics from '../../components/Layout/ui/statistics/Statistics';
//import SendDataButton from '../../components/Layout/ui/send-data-buttion/SendDataButton';

function Home() {
	const navigate = useNavigate();

	return (
		<Layout bgImage="/images/home-bg.jpg">
			<Button clickHandler={() => navigate('/new-workout')}>{'New'}</Button>
			{/* <SendDataButton /> */}

			<h1 className={styles['heading']}>EXERCISES FOR THE SHOULDERS</h1>
			<Statistics />
		</Layout>
	);
}

export default Home;
