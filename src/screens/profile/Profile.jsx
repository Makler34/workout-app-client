//import { SlUser } from 'react-icons/sl';
import cn from 'clsx';
//import { useAuth } from '../../hooks/useAuth';
import Statistics from '../../components/Layout/ui/statistics/Statistics';
import { useProfile } from './useProfile';
import stylesLayout from '../../components/Layout/Layout.module.scss';
import styles from './Profile.module.scss';
import Header from '../../components/Layout/header/Header';
import Loader from '../../components/Layout/ui/Loader';

const Profile = () => {
	const { data, isLoading } = useProfile();

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/profile-bg.jpg')`,
					height: 356
				}}
			>
				<Header />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								src="/images/header/user.svg"
								alt="Profile"
								height="56"
								draggable={false}
							/>
							<h1 className={stylesLayout.heading}>{data?.email}</h1>
						</>
					)}
				</div>
				<Statistics />
			</div>
			<div
				className="wrapper-inner-page"
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div className={styles.before_after}>
					{data?.images?.map((image, index) => (
						<div key={image}>
							<div className={styles.heading}>
								{index === 0 ? 'After' : 'Before'}
							</div>
							<img
								src={image}
								alt=""
								draggable={false}
								style={{ borderRadius: 14 }}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Profile;
