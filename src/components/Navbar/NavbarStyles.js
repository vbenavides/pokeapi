import styled from 'styled-components';

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: white;
`

export const Logo = styled.img`
	display: block;
`
export const ListNavbar = styled.ul`
	display: flex;
	flex-direction: row;

	li {
		list-style: none;
		padding-left: 5px;
	}
`