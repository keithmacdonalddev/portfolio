import React, { useState } from 'react';
import NavBar from '../Navbar';
import HamburgerMenu from '../HamburgerMenu';
import Home from '../Home';
import classname from './app.module.css';

const App = () => {
	const [hamburgerActive, setHamburgerActive] = useState(false);
	console.log(hamburgerActive);
	return (
		<div className={classname.site_layout}>
			<div className={classname.topbar}>
				<div className={classname.navbar}>
					<NavBar />
				</div>
				<div
					onClick={() => setHamburgerActive(!hamburgerActive)}
					className={hamburgerActive ? classname.hamburger_menu_open : classname.hamburger_menu_closed}>
					<div className={classname.icon}>
						{hamburgerActive ? <div className={classname.x_icon}>X</div> : <div>Icon</div>}
					</div>
					<HamburgerMenu open={hamburgerActive} />
				</div>
			</div>
			<div className={classname.currentView}>
				<Home />
			</div>
		</div>
	);
};

export default App;
