import styled from 'styled-components'

export const CardContainer = styled.div`
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
`

export const CardImg = styled.img`
  background-color: #f2f2f2;
  width: 100%;
  border-radius: 15px;
`
export const CardNumber = styled.p`
  color: #919191;
  font-family: 'Arial, Helvetica, sans-serif';
  font-size: 1.28rem;
  font-weight: bold;
  line-height: 1.6rem;
  margin: 5px 0;
  padding-left: 15px;
`

export const CardTitle = styled.h2`
  color: rgb(49, 49, 49);
  font-family: 'Arial, Helvetica, sans-serif';
  font-size: 2rem;
  font-weight: bold;
  line-height: 2.25rem;
  margin: 10px 0 5px 0;
  padding-left: 15px;
  text-transform: capitalize;

`

export const CardTypeContainer = styled.div`
  display: flex;
`
export const CardElement = styled.span`
  width: 110px;
  height: 18px;
  /* background-color: orange; */
  color: white;
  margin: 0 5px 0 15px;
  border-radius: 5px;
  font-family: 'Arial, Helvetica, sans-serif';
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.8rem;
  text-transform: capitalize;

`