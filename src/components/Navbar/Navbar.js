import React from 'react';
import { ListNavbar, Logo, NavbarContainer } from './NavbarStyles';

class Navbar extends React.Component {
	render(){
		return(
			<NavbarContainer>
				<Logo src="https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png" alt=""/>
				<ListNavbar>
					<li>Vbenavides</li>
					<li>Github</li>
				</ListNavbar>
			</NavbarContainer>
		)
	}
}

export default Navbar;