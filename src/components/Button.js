import React from 'react';
import styled from 'styled-components';
import Gmap from './Gmap';

const ButtonStyles = styled.button`
  background: #D66F6F;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: #fff;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 2em;
`;

const Button = (props) => {
  return (
    <ButtonStyles onClick={props.clicked}>
      {props.name}
    </ButtonStyles>
  );

}

export default Button;
