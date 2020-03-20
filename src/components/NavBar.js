import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background: #5176A6;
  margin: 0;
  padding: 1em;
  display: flex;
  flex-flow: nowrap;
  justify-content: flex-start;
  align-items: center;
  h1 {
    margin: 0;
    padding: 0;
    list-style: none;
    height: 100%;
    width: auto;
    a {
      text-decoration: none;
      color: #fff;
      text-decoration: none;
      margin: 10px;
    }
  }


`
const Button = styled.button`
  display: flex;
  flex-flow: nowrap;
  justify-content: flex-end;
  align-items: right;
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 16px;
  color: white;
  border: 2px solid white;
  margin: 10px 1px;
  padding: 9.25px 19px;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }

`;


const NavBar = () => {

  return (
    <div>
      <StyledNav>

        <h1> <Link to='/'> HANGRY </Link> </h1>
        <div className="fknbutton">
          <Button>Login</Button>
        </div>


      </StyledNav>

    </div>
  );

}

export default NavBar;
