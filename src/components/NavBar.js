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
      .login {
        color: black;
      }
    }
  }
`

const NavBar = () => {

  return (
    <div>
      <StyledNav>

        <ul>
          <li> <Link to='/front-end-resto/'> HANGRY </Link> </li>
          <div className='login'>
            <li> <Link to='/login'>LOG IN</Link> </li>

          </div>

      </ul>
      </StyledNav>

    </div>
  );

}

export default NavBar;
