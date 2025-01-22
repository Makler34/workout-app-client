import styles from './Hamburger.module.scss';
import { CgMenuRight } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import Menu from './Menu';
import { useClickOutside } from '../../../../hooks/useClickOutside';

const Hamburger = () => {
	const { ref, isShow, setIsShow } = useClickOutside();

	const handleButtonClick = event => {
		event.stopPropagation();
		setIsShow(prev => !prev);
	};

	return (
		<div className={styles['wrapper']}>
			<button ref={ref} onClick={handleButtonClick}>
				{isShow ? <IoClose size={30} /> : <CgMenuRight size={30} />}
				<Menu isShow={isShow} />
			</button>
		</div>
	);
};

export default Hamburger;
