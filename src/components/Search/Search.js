import React, { useState } from 'react';
import {
  StyledDiv,
  StyledContainer,
  StyledInputContainer,
  Text,
} from './SearchStyles';

const Search = (props) => {
  const { onSearch, setPage } = props;
  const [searchPoke, setSeachPoke] = useState('');

  const onChange = (e) => {
    setSeachPoke(e.target.value);
    if (e.target.value === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    setPage(0);
    onSearch(searchPoke);
  };

  return (
    <StyledContainer>
      <StyledDiv>
        <StyledInputContainer>
          <p className='search-title'>Name or Number</p>
          <div>
            <input
              className='input-text'
              type='text'
              onChange={onChange}
              required
            />
            <button className='input-button' onClick={onClick} />
          </div>
        </StyledInputContainer>
        <Text>
          Search for a Pokémon by name or using its National Pokédex number.
        </Text>
      </StyledDiv>
    </StyledContainer>
  );
};

export default Search;
