import React from 'react';
import classname from './hamburgerMenu.module.css';
import { Link } from 'react-router-dom';

const HamburgerMenu = ({ open }) => {
	return (
		<div className={classname.hamburger_menu_container}>
			{open ? (
				<ul className={classname.hamburger_menu_open}>
					<Link to='/'>
						<li className={classname.hamburger_menu_item}>Home</li>
					</Link>
					<Link to='/about'>
						<li className={classname.hamburger_menu_item}>About</li>
					</Link>
					<Link to='contact'>
						<li className={classname.hamburger_menu_item}>Contact</li>
					</Link>
					<Link to='projects'>
						<li className={classname.hamburger_menu_item}>Projects</li>
					</Link>
				</ul>
			) : (
				<div className={classname.hamburger_menu_closed}></div>
			)}
		</div>
	);
};

export default HamburgerMenu;
