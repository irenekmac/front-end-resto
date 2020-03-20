import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  background: #d66f6f;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: #fff;
  margin: 0 35px;
  padding: 5.25px 32px;
  font-size: 2em;
`;

const Button = props => {
  return <ButtonStyles onClick={props.clicked}>{props.name}</ButtonStyles>;
};

export default Button;
