import React, { useState } from 'react';
import { InputContainer, SearchWrapper, Text } from './SearchStyles';

const Search = (props) => {
  const { onSearch } = props
  const [ searchPoke, setSeachPoke ] = useState('')

  const onChange = (e) => {
    setSeachPoke(e.target.value)
    if (e.target.value === 0) {
      onSearch(null)
    }
  }

  const onClick = async (e) => {
    onSearch(searchPoke)
  }

  return(
    <SearchWrapper>
      <InputContainer>
        <p className="search-title">Name or Number</p>
        <div>
          <input className="input-text" type="text" onChange={onChange} />
          <button className="input-button" onClick={onClick}/>
        </div>
      </InputContainer>
      <Text>
        Search for a Pokémon by name or using its National Pokédex number.
      </Text>
    </SearchWrapper>
  )
}

export default Search;