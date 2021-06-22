import React from 'react';
import classname from './Logo.module.css';
const mystyle = {
	background:
		'linear-gradient(to right, #462523 0, #cb9b51 22%, #f6e27a 45%, #f3ed99 50%, #f6e27a 55%, #cb9b51 78%, #462523 100%)',
};

const Logo = () => {
	return (
		<div style={mystyle} className={classname.button_background}>
			<div className={classname.create_ticket_button}>
				<div className={classname.initials}>KM</div>
			</div>
		</div>
	);
};

export default Logo;
