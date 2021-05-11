import React from 'react';
import classname from './Logo.module.css';
const Logo = () => {
	return (
		<div className={classname.logo_container}>
			<div className={classname.logo_initials}>KM</div>
			<div className={classname.logo_name}>Keith Dev</div>
		</div>
	);
};

export default Logo;
