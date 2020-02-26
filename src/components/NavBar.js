import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background: #5176A6;
  margin: 0;
  padding: 1em;
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    height: 100%;
    width: auto;
    align-items: center;
    li {
      box-sizing: border-box;
      a {
        color: #fff;
        text-decoration: none;
        margin: 10px;
      }
    }
  }
`

const NavBar = () => {

  return (
    <div>
      <StyledNav>

        <ul>
          <li> <Link to='/'> HANGRY </Link> </li>
          <li> <Link to='/login'>LOG IN</Link> </li>
          <li> <Link to='/signup'>SIGN UP</Link> </li>

      </ul>
      </StyledNav>

    </div>
  );

}

export default NavBar;
