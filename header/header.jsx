import { CiUser } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseLargeLine } from 'react-icons/ri';
import styles from './header.module.scss';
import { useEffect, useRef, useState } from 'react';

function Header() {
	return (
		<div className={styles['header']}>
			<CiUser width={31} height={31} />
			<IconWithMenu />
		</div>
	);
}

export default Header;

const IconWithMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);

	const handleIconClick = () => {
		setIsOpen(!isOpen);
	};

	const handleClickOutside = event => {
		if (menuRef.current && !menuRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('click', handleClickOutside);
		} else {
			document.removeEventListener('click', handleClickOutside);
		}

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});

	return (
		<div className={styles['icon-container']}>
			<div className={styles['icon']} onClick={handleIconClick}>
				{isOpen ? (
					<RiCloseLargeLine width={31} height={31} />
				) : (
					<RxHamburgerMenu width={31} height={31} />
				)}
			</div>

			{isOpen && (
				<div className={styles['context-menu']}>
					<ul
						onClick={() => {
							handleIconClick();
						}}
					>
						<li>Пункт 1</li>
						<li>Пункт 2</li>
						<li>Пункт 3</li>
					</ul>
				</div>
			)}
		</div>
	);
};
