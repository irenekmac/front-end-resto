import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyCSodW9rAze3SoIql56Y6CE4Z51iMUcXKw");
const API_KEY = "AIzaSyCSodW9rAze3SoIql56Y6CE4Z51iMUcXKw"

const StyledMap = styled.div`


  border: solid #CCC 1px;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 2em;
  padding: 1em;
  line-height: 2.5vw;
`

class Gmap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: null,
      latitude: null,
      longitude: null
    };

  }

    getRestoAddress = () => {
     let url = 'https://team-hangry.herokuapp.com/restaurants'

     axios.get(url)
        .then(res => {
           let data = res.data
           let RestoNum = Math.floor(Math.random() * data.length) //quote number
           let randomResto = data[RestoNum] //actual quote
           this.setState({
              address: randomResto['address']
           })
        })
  }

    componentDidMount(){
      this.getRestoAddress();
      console.log(this.props);
    }
    getAddressCoords = () => {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.address}&key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ latitude: data.geometry.location.latitude, longitude: data.geometry.location.longitude })
        })
        .catch(error => console.warn(error))
    }

    getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

  getCoordinates = (position) => {
    // console.log(position.coords.latitude);
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    })
  }

  // reverseGeoCoordinates = () => {
  //   fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=${API_KEY}`)
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.warn(error))
  //
  // }

  handleLocationError = (error) => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
        default:
        alert("An unknown error occurred.")
      }
    }


  render () {
    console.warn("test", this.state.address)

    return (
      <div>
      <h1>Where u?</h1>


      <button onClick={this.getLocation}>Where am i?</button>

      <p>Address: {this.state.address}!</p>
      {
        this.state.latitude && this.state.longitude ?
        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=16&size=500x400&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}}&key=${API_KEY}`} alt='' />
        :
        null
      }

      </div>
    );
  }
}

export default Gmap;
