import React from 'react';
import { InputContainer, SearchWrapper, Text } from './SearchStyles';

class Search extends React.Component {
  render(){
    return(
      <SearchWrapper>
        <InputContainer>
          <p className="search-title">Name or Number</p>
          <div>
            <input className="input-text" type="text"/>
            <input className="input-button" type="submit" value=""/>
          </div>
        </InputContainer>
        <Text>
          Search for a Pokémon by name or using its National Pokédex number.
        </Text>
      </SearchWrapper>
    )
  }
}

export default Search;