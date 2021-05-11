import React from 'react';
import NavBar from '../Navbar';
import classname from './app.module.css';
import myImage from '../../assets/IMG_7376.JPG';
const App = () => {
	return (
		<div className={classname.site_layout}>
			<div className={classname.navbar}>
				<NavBar />
			</div>
			<div className={classname.hero_container}>
				<div className={classname.hero_text_container}>
					<div className={classname.intro_text}>Hi, my name is</div>
					<div className={classname.name_text}>Keith MacDonald.</div>
					<div className={classname.title_tagline}>I build web software.</div>
					<div className={classname.details_text}>
						I'm a full stack web developer, specializing in React based solutions. My core skillset includes NodeJS,
						Express, MongoDB and vanilla CSS.
					</div>
					<div className={classname.button_container}>
						<button className={classname.button}>Contact Me</button>
					</div>
				</div>
				<div className={classname.hero_image_container}>
					<img src={myImage} alt='' />
				</div>
			</div>
		</div>
	);
};

export default App;
