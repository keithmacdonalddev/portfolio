import React from 'react';
import classname from './home.module.css';
import myImage from '../../assets/me.png';

const Home = () => {
	return (
		<>
			<div className={classname.hero_text_container}>
				<div className={classname.intro_text}>Hi, my name is</div>
				<div className={classname.name_text}>Keith MacDonald.</div>
				<div className={classname.title_tagline}>I build web software.</div>
				<div className={classname.details_text}>
					I'm a full stack web developer, specializing in React based solutions. My core skillset includes NodeJS,
					Express, MongoDB and vanilla CSS.
				</div>
				<div className={classname.button_container}>
					<button className={classname.button}>View Portfolio</button>
				</div>
			</div>
			<div className={classname.hero_image_container}>
				<div className={classname.hexigon_shape}>
					<img src={myImage} alt='' />
				</div>
			</div>
		</>
	);
};

export default Home;
