import styled from 'styled-components';

export const StyledLiContainer = styled.div`
  /* display: grid; */
  /* width: 100%; */
  /* max-width: 318px; */
  /* max-height: 389px; */
  /* border: 1px solid red; */

  /*   
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(212px, 1fr)); */

  min-width: 210px;
  min-height: 284px;
  background-color: white;
  margin: 0 4px 50px 4px;
`;

export const StyledImg = styled.img`
  background-color: #f2f2f2;
  width: 100%;
  border-radius: 15px;
`;
export const StyledPNumber = styled.p`
  color: #919191;
  /* font-family: 'Roboto', sans-serif; */
  font-size: 1.28rem;
  font-weight: bold;
  line-height: 1.6rem;
  margin: 5px 0;
  padding-left: 15px;
`;

export const CardTitle = styled.h5`
  color: rgb(49, 49, 49);
  /* font-family: 'Roboto', sans-serif; */
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2.2rem;
  margin: 10px 0 5px 0;
  padding-left: 15px;
  text-transform: capitalize;
  /* font-stretch: 100%; */
`;

export const CardTypeContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;
export const CardElement = styled.span`
  width: 84px;
  height: 18px;
  /* background-color: orange; */
  /* color: white; */
  /* margin: 0 5px 0 15px; */
  margin: 0 6%;
  border-radius: 3px;
  /* font-family: 'Roboto', sans-serif; */
  text-align: center;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.8rem;
  text-transform: capitalize;
`;
