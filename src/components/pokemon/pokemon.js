import React from 'react'
import { CardContainer, CardImg, CardNumber, CardTitle, CardTypeContainer, CardElement } from './pokemonStyles'
import pokemonType from '../TypeElemet'

const Pokemon = (props) => {
  const { pokemon } = props


  return (
    <CardContainer key={pokemon.name}>
      <CardImg src={pokemon.sprites.front_default} alt={pokemon.name} />
      <CardNumber>#{pokemon.id}</CardNumber>
      <CardTitle>{pokemon.name}</CardTitle>
      <CardTypeContainer>
        {pokemon.types.map((type) => {
          return(
            <CardElement style={{backgroundColor: pokemonType[type.type.name]}}>{type.type.name}</CardElement>
          )
        })}
      </CardTypeContainer>
    </CardContainer>
  )
}

export default Pokemon;