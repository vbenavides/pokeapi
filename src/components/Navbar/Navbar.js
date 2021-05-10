import React from 'react';
import { ListNavbar, Logo, NavbarContainer } from './NavbarStyles';

const Navbar = () => {

	return(
		<NavbarContainer>
			<Logo onClick={() => window.location.reload(false)} src="https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png" alt=""/>
			<ListNavbar>
				<li>Vbenavides</li>
			</ListNavbar>
		</NavbarContainer>
	)
}

export default Navbar;