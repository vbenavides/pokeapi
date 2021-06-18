import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #313131;
  max-width: 1024px;
  min-width: 260px;
  height: 60px;
  margin: 0 auto;
  font-size: 1.6rem;
  align-items: center;
  box-sizing: border-box;
  padding: 0 5px;
  /* border: 1px solid red; */
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 7%;

  @media (max-width: 460px) {
    margin: 0;
  }

  .logo {
    display: block;
    width: 130px;
    cursor: pointer;
  }
`;
export const StyledLinks = styled.div`
  display: block;

  ol {
    display: flex;
    flex-direction: row;
    color: white;

    li {
      list-style: none;
      padding-right: 10px;
      font-weight: bold;

      a {
        display: flex;
        align-items: center;
        color: white;
        margin-left: 10px;

        svg {
          width: 25px;
          /* height: 50px; */
          color: white;
        }
      }
    }
  }
`;
