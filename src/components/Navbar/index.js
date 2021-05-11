import React from 'react';
import NavButton from './NavButton';
import Logo from './Logo';
import classname from './Navbar.module.css';

const NavBar = () => {
	return (
		<div className={classname.navbar_container}>
			<div className={classname.navbar_items}>
				<Logo className={classname.logo} />
				<div className={classname.navbutton_wrapper}>
					<NavButton className={classname.nav_button} buttonText={'About'} />
					<NavButton className={classname.nav_button} buttonText={'Resume'} />
					<NavButton className={classname.nav_button} buttonText={'Contact'} />
					<NavButton className={classname.nav_button} buttonText={'Projects'} special={true} />
				</div>
			</div>
		</div>
	);
};

export default NavBar;
