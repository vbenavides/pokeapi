import React from 'react';
import {
  StyledLiContainer,
  StyledImg,
  StyledPNumber,
  CardTitle,
  CardTypeContainer,
  CardElement,
} from './pokemonStyles';
import { TypeElement, TypeColorWhite } from '../TypeElemet';

const Pokemon = (props) => {
  const { pokemon } = props;

  return (
    <StyledLiContainer key={pokemon.name}>
      <figure>
        <StyledImg
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          aria-label={pokemon.name}
        />
      </figure>
      <div>
        <StyledPNumber>#{pokemon.id}</StyledPNumber>
        <CardTitle>{pokemon.name}</CardTitle>
      </div>

      <CardTypeContainer>
        {pokemon.types.map((type) => {
          return (
            <CardElement
              style={{
                backgroundColor: TypeElement[type.type.name],
                color: TypeColorWhite[type.type.name],
              }}
            >
              {type.type.name}
            </CardElement>
          );
        })}
      </CardTypeContainer>
    </StyledLiContainer>
  );
};

export default Pokemon;
