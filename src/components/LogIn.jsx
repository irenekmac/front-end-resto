import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import NavBar from "./NavBar";
import axios from 'axios';

import '../Login.css'

const LogIn = props => {

  const [email, setEmail] = useState("ian@ga.com");
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


      axios.post( 'http://localhost:3000/login', {
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

            <input value={email} onChange={handleEmailChange} type="text" placeholder="Your email address"/>


            <input value={password} onChange={handlePasswordChange} type="password" placeholder="Password"/>
          </div>
          <br/>

          <button id="login-submit" type="submit">Login</button>
        </form>
    </div>
  );
};

export default LogIn;
