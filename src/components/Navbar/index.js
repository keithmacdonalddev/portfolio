import React from 'react';
import NavButton from './NavButton';
// import Logo from './Logo';
import classname from './Navbar.module.css';
// import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<navbar className={classname.navbar_container}>
			<div className={classname.navbar_items}>
				{/* <Logo className={classname.logo} /> */}
				<div className={classname.navbutton_wrapper}>
					{/* <Link to='/'> */}
					<NavButton className={classname.nav_button} buttonText={'Home'} />
					{/* </Link> */}
					{/* <Link to='/about'> */}
					<NavButton className={classname.nav_button} buttonText={'About'} />
					{/* </Link> */}
					{/* <Link to='/contact'> */}
					<NavButton className={classname.nav_button} buttonText={'Contact'} />
					{/* </Link> */}
					{/* <Link to='/projects'> */}
					<NavButton className={classname.nav_button} buttonText={'Projects'} special={true} />
					{/* </Link> */}
				</div>
			</div>
		</navbar>
	);
};

export default NavBar;
