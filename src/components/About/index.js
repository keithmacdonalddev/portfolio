import React, { useState } from 'react';
import classname from './about.module.css';

const About = () => {
	const [clicked, setClicked] = useState(false);
	const [clicked2, setClicked2] = useState(false);
	const [clicked3, setClicked3] = useState(false);
	const [clicked4, setClicked4] = useState(false);
	const [clicked5, setClicked5] = useState(false);
	const [clicked6, setClicked6] = useState(false);
	const [clicked7, setClicked7] = useState(false);
	const [clicked8, setClicked8] = useState(false);
	const [clicked9, setClicked9] = useState(false);

	const handleReset = () => {
		setClicked(false);
		setClicked2(false);
		setClicked3(false);
		setClicked4(false);
		setClicked5(false);
		setClicked6(false);
		setClicked7(false);
		setClicked8(false);
		setClicked9(false);
	};

	return (
		<>
			<div className={classname.popper_group}>
				<button className={classname.reset} onClick={() => handleReset()}>
					Reset
				</button>
				<div onClick={() => setClicked(!clicked)} className={classname.container}>
					<div className={clicked ? classname.main2 : classname.main}>
						<div className={classname.name}>Emma</div>
					</div>
				</div>
				<div onClick={() => setClicked2(!clicked2)} className={classname.container}>
					<div className={clicked2 ? classname.main2 : classname.main}>
						<div className={classname.name}>Emma</div>
					</div>
				</div>

				<div onClick={() => setClicked3(!clicked3)} className={classname.container}>
					<div className={clicked3 ? classname.main2 : classname.main}>
						<div className={classname.name}>Emma</div>
					</div>
				</div>

				<div onClick={() => setClicked4(!clicked4)} className={classname.container}>
					<div className={clicked4 ? classname.main2 : classname.main}>
						<div className={classname.name}>Emma</div>
					</div>
				</div>

				<div onClick={() => setClicked5(!clicked5)} className={classname.container}>
					<div className={clicked5 ? classname.main2 : classname.main}>
						<div className={classname.name}>Emma</div>
					</div>
				</div>

				<div onClick={() => setClicked6(!clicked6)} className={classname.container}>
					<div className={clicked6 ? classname.main2 : classname.main}>
						<div className={classname.name}>Emma</div>
					</div>
				</div>

				<div onClick={() => setClicked7(!clicked7)} className={classname.container}>
					<div className={clicked7 ? classname.main2 : classname.main}>
						<div className={classname.name}>Emma</div>
					</div>
				</div>
				<div onClick={() => setClicked8(!clicked8)} className={classname.container}>
					<div className={clicked8 ? classname.main2 : classname.main}>
						<div className={classname.name}>Emma</div>
					</div>
				</div>
				<div onClick={() => setClicked9(!clicked9)} className={classname.container}>
					<div className={clicked9 ? classname.main2 : classname.main}>
						<div className={classname.name}>Emma</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
