import React, { Component } from 'react';
import NavBar from './NavBar'
import Button from './Button'
import RestaurantInfo from './RestaurantInfo'
import axios from 'axios'

class HomePage extends React.Component {

  render() {
    return (
      <div>

    <NavBar />

    <RestaurantInfo />

    <Button name={"another one"}/>
    <Button name={"where u?"}/>
      </div>
    );
  }
}

export default HomePage;
