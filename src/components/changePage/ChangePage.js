import React, { useContext } from 'react';
import {
  PaginatorContainer,
  PaginatorButton,
  PaginatorText,
} from './ChangePageStyles';
import LeftArrow from '../../assets/left-arrow.svg';
import RightArrow from '../../assets/right-arrow.svg';
import AppContext from '../../context/AppContext';

const ChangePage = (props) => {
  const { leftClick, rightClick, totalPages } = props;
  const { page } = useContext(AppContext);

  return (
    <PaginatorContainer>
      <PaginatorButton onClick={leftClick}>
        <img src={LeftArrow} alt='left-arrow' />
      </PaginatorButton>
      <PaginatorText>
        {page} de {totalPages}
      </PaginatorText>
      <PaginatorButton onClick={rightClick}>
        <img src={RightArrow} alt='left-arrow' />
      </PaginatorButton>
    </PaginatorContainer>
  );
};

export default ChangePage;
