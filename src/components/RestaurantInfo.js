import React from 'react';
import axios from 'axios'
import styled from 'styled-components';

const StyledInfo = styled.div`

  border: solid #CCC 1px;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 2em;
  padding: 1em;
  line-height: 2.5vw;
`

class RestaurantInfo extends React.Component {

  state = {
      id: 13,
      name: 'Chat Thai',
      description: 'thai food',
      price: '$$',
      cuisine: 'Thai',
      eatout: '👍🏼',
      eatin: '👍🏼',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTd4HMxWaEaV3Mqv9f_UUdyb_77wv4zwFGH_3iz4diyZGoH8bKU'
    };

    // getResto = () => {
    //   console.log('hello');
    //   axios.get(`http://localhost:3000/restaurants/13.json`)
    //   .then( res => {
    //     console.log(res);
    //   })
    //   .catch( err => console.warn(err) )
    // }
    //
    // componentDidMount(){
    //   this.getResto()
    // }

    render() {

        return (
          <div className="info">
            <h3>RESTOOOOOOO {this.state.time}</h3>

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
        </StyledInfo>
      </div>
        );
    }

}

export default RestaurantInfo;
