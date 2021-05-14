import React, { useState } from 'react';
import classname from './about.module.css';

const About = () => {
	const [clicked, setClicked] = useState(false);
	return (
		<div onClick={() => setClicked(!clicked)} className={classname.container}>
			<div className={clicked ? classname.main2 : classname.main}>
				<div className=''>Emma</div>
			</div>
			<div className={clicked ? classname.main2 : classname.main}>
				<div className=''>Emma</div>
			</div>
			<div className={clicked ? classname.main2 : classname.main}>
				<div className=''>Emma</div>
			</div>
			<div className={clicked ? classname.main2 : classname.main}>
				<div className=''>Emma</div>
			</div>
			<div className={clicked ? classname.main2 : classname.main}>
				<div className=''>Emma</div>
			</div>
			<div className={clicked ? classname.main2 : classname.main}>
				<div className=''>Emma</div>
			</div>
			<div className={clicked ? classname.main2 : classname.main}>
				<div className=''>Emma</div>
			</div>
		</div>
	);
};

export default About;
