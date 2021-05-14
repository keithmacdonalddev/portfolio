import React from 'react';
import classname from './hamburgerMenu.module.css';

const HamburgerMenu = ({ open }) => {
	return (
		<div className={classname.hamburger_menu_container}>
			{open ? (
				<ul className={classname.hamburger_menu_open}>
					<li className={classname.hamburger_menu_item}>Home</li>
					<li className={classname.hamburger_menu_item}>About</li>
					<li className={classname.hamburger_menu_item}>Contact</li>
					<li className={classname.hamburger_menu_item}>Projects</li>
				</ul>
			) : (
				<div className={classname.hamburger_menu_closed}></div>
			)}
		</div>
	);
};

export default HamburgerMenu;
