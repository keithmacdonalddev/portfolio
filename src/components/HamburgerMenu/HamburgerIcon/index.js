import React from 'react';
import classname from './hamburgerIcon.module.css';

const HamburgerIcon = ({ hamburgerIsOpen }) => {
	return (
		<div className={classname.icon_container}>
			{!hamburgerIsOpen ? (
				<>
					<div className={classname.hamburger}></div>
					<div className={classname.hamburger}></div>
					<div className={classname.hamburger}></div>
				</>
			) : (
				<div className={classname.x_icon}>X</div>
			)}
		</div>
	);
};

export default HamburgerIcon;
