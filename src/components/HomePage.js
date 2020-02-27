import React, { Component } from 'react';
import NavBar from './NavBar'
import Button from './Button'
import RestaurantInfo from './RestaurantInfo'
import { Route } from 'react-router-dom';

class HomePage extends React.Component {

  render() {
    return (
      <div>

    <NavBar />

    <Route path='/:id' component={RestaurantInfo} />

    <Button name={"another one"}/>
    <Button name={"where u?"}/>
      </div>
    );
  }
}

export default HomePage;
