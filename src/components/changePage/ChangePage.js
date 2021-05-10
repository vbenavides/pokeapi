import React from 'react'
import { PaginatorContainer, PaginatorButton, PaginatorText} from './ChangePageStyles'
import LeftArrow from '../../assets/left-arrow.svg'
import RightArrow from '../../assets/right-arrow.svg'

const ChangePage = (props) => {
  const { leftClick, rightClick, totalPages, page } = props

  return(
    <PaginatorContainer>
      <PaginatorButton onClick={leftClick} >
        <img src={LeftArrow} alt="left-arrow" />
      </PaginatorButton>
      <PaginatorText>
        {page} de {totalPages}
      </PaginatorText>
      <PaginatorButton onClick={rightClick}>
        <img src={RightArrow} alt="left-arrow" />
      </PaginatorButton>
    </PaginatorContainer>
  )
}

export default ChangePage;