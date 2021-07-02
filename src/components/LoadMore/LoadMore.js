import React from 'react';
import styled from 'styled-components';

const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: center;

  button {
    background-color: #44c767;
    border-radius: 4px;
    border: 1px solid #18ab29;
    display: flex;
    flex-direction: row;
    justify-content: center;
    cursor: pointer;
    color: #ffffff;
    font-size: 17px;
    padding: 16px 31px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #2f6627;
    margin-bottom: 20px;
  }
`;

const LoadMore = (props) => {
  const { loadMore, loading } = props;

  return (
    <StyledButtonDiv>
      {/* {loading && (
        <button type='button' className='LoadMore'>
          Loading...
        </button>
      )}
      {!loading && (
      )} */}
      <button type='button' className='LoadMore' onClick={loadMore}>
        Load more Pokémon
      </button>
    </StyledButtonDiv>
  );
};

export default LoadMore;
