import React from 'react';
import myImage from '../../assets/me.png';
import { Link } from 'react-router-dom';
import classname from './home.module.css';

const Home = () => {
	return (
		<>
			<header className={classname.hero_text_container}>
				<h1 className={classname.name_text}>Keith MacDonald</h1>
				<h2 className={classname.title_tagline}>
					Full Stack <span>React</span>
				</h2>
				<p className={classname.details_text}>
					I'm a full stack web developer, specializing in React based solutions. My core skillset includes NodeJS,
					Express, MongoDB and vanilla CSS.
				</p>
				<div className={classname.button_container}>
					<Link to='/projects'>
						<button className={classname.button}>View Portfolio</button>
					</Link>
				</div>
			</header>
			<div className={classname.hero_image_container}>
				<div className={classname.hexigon_shape}>
					<img className={classname.img} src={myImage} alt='' />
				</div>
			</div>
			<section className={classname.section}></section>
		</>
	);
};

export default Home;
