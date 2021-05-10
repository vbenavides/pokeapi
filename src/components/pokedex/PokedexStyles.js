import styled from 'styled-components'

export const PokedexContainer = styled.div`
  max-width: 913px;
  margin: 0 auto;
  background-color: white;

`

export const PokemonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(212px, 1fr));
`

export const PokedexLoading = styled.div`
  display: flex;
  font-size: 3rem;
  background-color: white;
  justify-content: center;
  max-width: 913px;
  margin: 0 auto;
  height: 90px;
  max-width: 913px;
	min-width: 260px;
  align-items: flex-end;
  padding: 20px ;
  color: rgb(145, 145, 145);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
`