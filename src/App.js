import React, { useState, useRef, useEffect } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import { TweenMax, Power3 } from 'gsap';
// Components
import NavBar from './components/Navbar';
import HamburgerMenu from './components/HamburgerMenu';
// Views
import Home from './views/Home';
import Contact from './views/Contact';
import Projects from './views/Projects';
import About from './views/About';
// Images
import myImage from './assets/me.png';
import reactTrackerFrontPage from './assets/reactTrackerFrontPage.png';
// CSS
import classname from './app.module.css';

const App = () => {
	let mainNav = useRef(null);
	let heroContainer = useRef(null);
	let heroTitle = useRef(null);
	let heroSubTitle = useRef(null);
	let heroText = useRef(null);
	let heroImage = useRef(null);
	let heroButton = useRef(null);

	useEffect(() => {
		TweenMax.from(mainNav, 1, { opacity: 0, y: -100, ease: Power3.easeOut });
		TweenMax.from(heroContainer, 1, { opacity: 0, x: 2000, ease: Power3.easeOut });
		TweenMax.from(heroTitle, 1, { opacity: 0, x: -1000, ease: Power3.easeOut, delay: 0.2 });
		TweenMax.from(heroSubTitle, 1, { opacity: 0, x: -1000, ease: Power3.easeOut, delay: 0.4 });
		TweenMax.from(heroText, 1, { opacity: 0, x: -1000, ease: Power3.easeOut, delay: 0.6 });
		TweenMax.from(heroButton, 1, { opacity: 0, y: 1000, ease: Power3.easeOut, delay: 0.8 });
		TweenMax.from(heroImage, 1, { opacity: 0, y: 1000, ease: Power3.easeOut, delay: 1.0 });
	}, []);

	const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [gradientShouldChange, setGradientShouldChange] = useState(true);
	const [gradient, setGradient] = useState(false);
	const [gradients, setGradients] = useState([
		'linear-gradient(20deg, #4cecf8, #0071df)',
		'linear-gradient(20deg, rgb(251, 237, 201), #0071E3)',
		'linear-gradient(20deg, #89C8FC, #50b0ff)',
		'linear-gradient(106deg,#989898,#1d1d1d)',
	]);
	let activeGradient;
	return (
		<div className={isDarkMode ? classname.topbar_dark_mode : classname.topbar_light_mode}>
			<div className={classname.site_layout}>
				{/*********************************************************************/}
				{/* Background */}
				{/*********************************************************************/}

				<div onClick={() => setGradient(!gradient)} className={classname.change_background_button}></div>
				<div style={{ background: gradients[activeGradient] }} className={classname.background_one}></div>

				{/*********************************************************************/}
				{/* Nav */}
				{/*********************************************************************/}

				<div ref={(el) => (mainNav = el)} className={classname.navbar}>
					<NavBar />
				</div>

				<div onClick={() => setHamburgerIsOpen(!hamburgerIsOpen)} className={classname.hamburger_container}>
					<HamburgerMenu hamburgerIsOpen={hamburgerIsOpen} />
				</div>

				{/*********************************************************************/}
				{/* HEADER */}
				{/*********************************************************************/}

				<header className={classname.header}>
					<div ref={(el) => (heroContainer = el)} className={classname.hero_container}>
						<div className={classname.hero_text_container}>
							<h1 ref={(el) => (heroTitle = el)} className={classname.hero_title}>
								<span id={classname.name_letter}>K</span>
								<span id={classname.name_letter}>e</span>
								<span id={classname.name_letter}>i</span>
								<span id={classname.name_letter}>t</span>
								<span id={classname.name_letter}>h</span>
								<span id={classname.name_letter}> </span>
								<span id={classname.name_letter}>M</span>
								<span id={classname.name_letter}>a</span>
								<span id={classname.name_letter}>c</span>
								<span id={classname.name_letter}>D</span>
								<span id={classname.name_letter}>o</span>
								<span id={classname.name_letter}>n</span>
								<span id={classname.name_letter}>a</span>
								<span id={classname.name_letter}>l</span>
								<span id={classname.name_letter}>d</span>
							</h1>
							<h2 ref={(el) => (heroSubTitle = el)} className={classname.hero_subtitle}>
								FULL STACK <span>DEVELOPER</span>
							</h2>
							<p ref={(el) => (heroText = el)} className={classname.hero_text}>
								Specializing in React solutions. My core skillset includes NodeJS, Express, MongoDB and vanilla CSS.
							</p>
							<div className={classname.hero_button_container}>
								{/* <Link to='/projects'> */}
								<button ref={(el) => (heroButton = el)} className={classname.hero_button}>
									View Portfolio
								</button>
								{/* </Link> */}
							</div>
						</div>
						<div ref={(el) => (heroImage = el)} className={classname.hero_image_container}>
							<div className={classname.hero_image}>
								<img className={classname.img} src={myImage} alt='' />
							</div>
						</div>
						<div className={classname.platform}></div>
					</div>
				</header>

				{/*********************************************************************/}
				{/* Case Studies / Featured Work Section							  */}
				{/*********************************************************************/}

				<section className={`${classname.section} ${classname.case_studies_section}`}>
					<div className={classname.section_title}>
						<span className={classname.section_title_span_one}>CASE</span>
						<span className={classname.section_title_span_two}>STUDIES</span>
					</div>
					<div className={classname.section_subtitle}>Featured Work</div>
					<div className={classname.case_studies_project_container}>
						<div className={classname.case_studies_project_box}>
							<div className={classname.project_image_container}>
								<img
									className={classname.project_image}
									src={reactTrackerFrontPage}
									alt='photo of front page of www.reacttracker.com'
								/>
								<div className={classname.project_overlay_light}></div>
								<div className={classname.project_overlay}></div>
								<div className={classname.project_title}>React Tracker</div>
								<div className={classname.project_description}>
									Organize projects, track bugs, feature requests and more.
								</div>
								<div className={classname.project_button}>Case Study</div>
							</div>
						</div>
						<div className={classname.case_studies_project_box}>
							<div className={classname.project_image_container}>
								<img
									className={classname.project_image}
									src={reactTrackerFrontPage}
									alt='photo of front page of www.reacttracker.com'
								/>
								<div className={classname.project_overlay_light}></div>
								<div className={classname.project_overlay}></div>
								<div className={classname.project_title}>React Tracker</div>
								<div className={classname.project_description}>
									Organize projects, track bugs, feature requests and more.
								</div>
								<div className={classname.project_button}>Case Study</div>
							</div>
						</div>
						<div className={classname.case_studies_project_box}>
							<div className={classname.project_image_container}>
								<img
									className={classname.project_image}
									src={reactTrackerFrontPage}
									alt='page of www.reacttracker.com'
								/>
								<div className={classname.project_overlay_light}></div>
								<div className={classname.project_overlay}></div>
								<div className={classname.project_title}>React Tracker</div>
								<div className={classname.project_description}>
									Organize projects, track bugs, feature requests and more.
								</div>
								<div className={classname.project_button}>Case Study</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default App;
