import React, { Component } from 'react';
import NavBar from './NavBar'
import RestaurantInfo from './RestaurantInfo'
import { Route } from 'react-router-dom';

class HomePage extends React.Component {

  render() {
    return (
      <div>

    <NavBar />

    <Route exact path='/' component={RestaurantInfo} />

      </div>
    );
  }
}

export default HomePage;
