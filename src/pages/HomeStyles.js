import styled from 'styled-components';

export const StyledTitle = styled.div`
  display: flex;
  background-color: white;
  max-width: 1024px;
  margin: 0 auto;
  height: 90px;
  min-width: 260px;
  align-items: flex-end;
  padding: 20px;
  color: rgb(145, 145, 145);
`;

export const StyledH2 = styled.h2`
  display: flex;
  font-size: 3rem;
  color: rgb(145, 145, 145);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  margin: 0 7%;

  @media (max-width: 460px) {
    margin: 0;
  }
`;
export const NotFoundStyle = styled.div`
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
  padding: 20px;
  color: rgb(145, 145, 145);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
`;
