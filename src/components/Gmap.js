import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from './Button';
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

    state = {
      address: '',
    };

    getRestoLocation = () => {
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
      this.getRestoLocation();
      console.log(this.props);
    }

  render () {
    console.warn("test", this.state.address)

    return (
      <div>
      <h1>Address: {this.state.address}!</h1>

      <iframe width="100%" height="450" src="https://www.google.com/maps/embed/v1/place?q={{{{LAT}}}},{{{{{{LONG}}}}}&amp;key=AIzaSyCSodW9rAze3SoIql56Y6CE4Z51iMUcXKw"></iframe>

      </div>
    );
  }
}

export default Gmap;
