import React from 'react';
import logo from './logo.svg';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import RestaurantNew from './components/RestaurantNew';
import Map from './components/Map';
import './App.css';
import {Switch, BrowserRouter, Route} from 'react-router-dom'


class App extends React.Component {

    render() {
      return (
        <BrowserRouter>
          <div className="App">

          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/login' component={LogIn}/>
            <Route exact path='/restaurant-new' component={RestaurantNew}/>
            <Route exact path='/map' component={Map}/>
          </Switch>
        </div>
      </BrowserRouter>
      );
  }
}

export default App;
