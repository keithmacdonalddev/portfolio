import React from 'react';
import classname from './navbutton.module.css';

const specialStyle = {
	borderBottom: '3px solid var(--color-primary-100)',
	borderRadius: 0,
};
const NavButton = ({ buttonText, special }) => {
	return (
		<div style={special && specialStyle} className={classname.navbutton_container}>
			{buttonText}
		</div>
	);
};

export default NavButton;
