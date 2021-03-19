import styled from 'styled-components';

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #313131;
	max-width: 913px;
	min-width: 260px;
	height: 60px;
	margin: 0 auto;
	font-size: 1.6rem;
	align-items: center;
	box-sizing: border-box;
	padding: 0 5px;

`

export const Logo = styled.img`
	display: block;
`
export const ListNavbar = styled.ul`
	display: flex;
	flex-direction: row;
	color: white;

	li {
		list-style: none;
		padding-left: 7px;
		font-weight: bold;
	}
`