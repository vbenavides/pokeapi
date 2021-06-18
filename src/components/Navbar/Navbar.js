import React from 'react';
import { StyledLinks, StyledHeader, StyledNav } from './NavbarStyles';
import LinkedinImg from '../icons/linkedin';
import GithubImg from '../icons/github';

const Navbar = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <div className='logo'>
          <a href='/' aria-label='Home'>
            <img
              onClick={() => window.location.reload(false)}
              src='https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png'
              alt=''
            />
          </a>
        </div>
        <StyledLinks>
          <ol>
            <li>
              <a
                href='https://www.linkedin.com/in/vicentebenavides/'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedinImg />
              </a>
            </li>
            <li>
              <a
                href='http://github.com/vbenavides/pokeapi'
                target='_blank'
                rel='noreferrer'
              >
                <GithubImg />
              </a>
            </li>
          </ol>
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  );
};

export default Navbar;
