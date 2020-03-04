import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from './Button';
import Gmap from './Gmap';



const StyledInfo = styled.div`

  border: solid #CCC 1px;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 2em;
  padding: 1em;
  line-height: 2.5vw;
`

let id = '';

class RestaurantInfo extends React.Component {

  state = {
      name: '',
      description: '',
      price: '',
      address: '',
      cuisine: '',
      eatout: '',
      eatin: '',
      image: ''
    };

    getRandomResto = () => {
     let url = 'https://team-hangry.herokuapp.com/restaurants'

     axios.get(url)
        .then(res => {
           let data = res.data
           let RestoNum = Math.floor(Math.random() * data.length) //quote number
           let randomResto = data[RestoNum] //actual quote
           this.setState({
              name: randomResto['name'],
              description: randomResto['description'],
              address: randomResto['address'],
              price: randomResto['price'],
              cuisine: randomResto['cuisine'],
              eatout: randomResto['eatout'],
              eatin: randomResto['eatin'],
              image: randomResto['image']
           })
        })
  }

    componentDidMount(){
      this.getRandomResto();
      console.log(this.props);
    }

    // componentDidUpdate(){
    //   this.getRandomResto();
    //   console.log(this.props);
    // }

    render() {

        return (
          <div className="info">
            <h3>Let's eat at <span>{this.state.name}</span></h3>

            <StyledInfo>
          <label>name: </label>
          {this.state.name ? this.state.name : <p>Loading...</p>}
          <br/>
          <label>description: </label>
          {this.state.description ? this.state.description : <p>Loading...</p>}
          <br/>
          <label>price: </label>
          {this.state.price ? this.state.price : <p>Loading...</p>}
          <br/>
          <label>cuisine: </label>
          {this.state.cuisine ? this.state.cuisine : <p>Loading...</p>}
          <br/>
          <label>eatout: </label>
          {this.state.eatout ? this.state.eatout : <p>Loading...</p>}
          <br/>
          <label>eatin: </label>
          {this.state.eatin ? this.state.eatin : <p>Loading...</p>}
          <br/>
          <img src={this.state.image}/>

        </StyledInfo>

        <Button name={"another one"} clicked={this.getRandomResto}/>
        <Button name={"where u?"} />

      </div>
        );
    }

}

export default RestaurantInfo;
