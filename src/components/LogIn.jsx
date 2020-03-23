import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import NavBar from "./NavBar";
import axios from 'axios';
import styled from "styled-components";

import '../Login.css'

const Input = styled.input.attrs(props => ({
  // we can define static props
  type: "password",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;


const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const LogIn = props => {

  const [email, setEmail] = useState("minters@test.co");
  const [password, setPassword] = useState("chicken");
  const [errors, setErrors] = useState("");
  let history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }


//need to clean up, will send to page whatever response
//conditional, only if jwt present
  const handleSubmit = (event) => {
    event.preventDefault()

    // console.log(email);
    // console.log(password);
    // console.log(event);


      axios.post( 'https://team-hangry.herokuapp.com/', {
        email: email,
        password: password,
        headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
        }
      })
      .then( res => {
        // console.log( res );
        if (res.data.jwt) {

          localStorage.setItem('token', res.data.jwt);
          localStorage.setItem('userId', res.data.user.id);
          axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.jwt}`;
          props.loginMessage( true, res.data.user.name )

          history.push('/profile')

        } else {

            setErrors(res.data.failure)
            // console.log(error)

        }
      })
      .catch( err => {
        console.warn( err );
      } );

      setEmail("")
      setPassword("")

      props.loginDisplay()
    }

  return (
    <div>
      <NavBar />

        {
            (errors) && <p>{errors}</p>
          }

        <form id="login" onSubmit={handleSubmit}>
          <div id="login-inputs">

             <Input value={password} type="password" />

            <input value={email} onChange={handleEmailChange} type="text" placeholder="Your email address"/>


            <input value={password} onChange={handlePasswordChange} type="password" placeholder="Password"/>
          </div>
          <Button>Login</Button>

        </form>
    </div>
  );
};

export default LogIn;
