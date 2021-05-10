import styled from 'styled-components';

const Media = {
  desktop: `@media(min-width: 500px)`
}

export const SearchWrapper = styled.div`
  max-width: 913px;
	min-width: 260px;
  display: flex;
  background-color: #313131;
  flex-direction: column;
  justify-content: start;
  padding: 30px 20px;
  margin: 0 auto;

  ${Media.desktop} {
    display: flex;
    flex-direction: row;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

    ${Media.desktop} {
      width: 50%;
      justify-content: center;
    }

    .search-title {
      color: white;
      display: inline-block;
      font-size: 2.68rem;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 400;
      padding-bottom: 5px;
    }

    div {
      display: flex;

        .input-text {
        height: 40px;
        padding: 8px 5px;
        width: 70%;
        margin-right: 30px;
        border-radius: 5px;
        font-size: 1.6rem;
        }

        .input-button {
          width: 35px;
          height: 40px;
          background-color: rgb(238, 107, 47);
          border: 0;
          border-radius: 5px;
          background-image: url(https://assets.pokemon.com/static2/_ui/img/chrome/forms/input-search-bg.png);
          background-repeat: no-repeat;
          background-position: center;
          cursor: pointer;
        }
    }

`

export const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  background-color: rgb(77, 173, 91);
  padding: 15px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  line-height: 2.5rem;
  border-radius: 5px;

    ${Media.desktop} {
      width: 50%;
    }
`
