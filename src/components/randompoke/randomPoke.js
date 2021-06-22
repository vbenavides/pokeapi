import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  background-color: white;
`;

const randomPoke = (props) => {
  const onClick = () => {
    props.randomPokemons();
  };

  return (
    <div>
      <StyledP>Hola</StyledP>
      <button onClick={onClick}>Random</button>
    </div>
  );
};

export default randomPoke;
