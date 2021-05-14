import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from '../Navbar';
import HamburgerMenu from '../HamburgerMenu';
import Home from '../Home';
import Contact from '../Contact';
import Projects from '../Projects';
import About from '../About';
import classname from './app.module.css';

const App = () => {
	const [hamburgerActive, setHamburgerActive] = useState(false);
	console.log(hamburgerActive);
	return (
		<div className={classname.site_layout}>
			<BrowserRouter>
				<div className={hamburgerActive ? classname.topbar_dark : classname.topbar_light}>
					<div className={classname.navbar}>
						<NavBar />
					</div>
					<div
						onClick={() => setHamburgerActive(!hamburgerActive)}
						className={hamburgerActive ? classname.hamburger_menu_open : classname.hamburger_menu_closed}>
						<div className={classname.icon}>
							{hamburgerActive ? (
								<div className={classname.x_icon}>X</div>
							) : (
								<div className={classname.hamburger}>Icon</div>
							)}
						</div>
						<HamburgerMenu open={hamburgerActive} />
					</div>
				</div>

				<div className={classname.currentView}>
					<Route path='/' exact component={Home} />
					<Route path='/about' exact component={About} />
					<Route path='/contact' exact component={Contact} />
					<Route path='/projects' exact component={Projects} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
