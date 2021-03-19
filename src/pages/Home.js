import React from 'react';
import Search from '../components/Search/Search';
import { Title } from './HomeStyles';

class Home extends React.Component{
	render() {
		return(
			<React.Fragment>
				<Title>Pokédex</Title>
				<Search />
			</React.Fragment>
		)

	}
}

export default Home;