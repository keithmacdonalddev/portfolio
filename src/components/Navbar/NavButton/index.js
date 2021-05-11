import React from 'react';
import classname from './navbutton.module.css';

const specialStyle = {
	border: '1px solid green',
};
const NavButton = ({ buttonText, special }) => {
	return (
		<div style={special && specialStyle} className={classname.navbutton_container}>
			{buttonText}
		</div>
	);
};

export default NavButton;
