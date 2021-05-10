import styled from 'styled-components'

export const PaginatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 70px;
  justify-content: center;
  align-items: center;
`

export const PaginatorButton = styled.button`
  display: block;
  /* height: 30px; */
  margin: 0 10px;
  border: none;
  cursor: pointer;
  background-color: transparent;

  img {
    width: 50px;
  }
`

export const PaginatorText = styled.div`
  display: flex;
  font-size: 2.5rem;
  background-color: white;
  justify-content: space-evenly;
  margin: 0 20px;
  /* color: rgb(145, 145, 145); */
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
`