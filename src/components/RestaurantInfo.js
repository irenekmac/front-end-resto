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

let id = '';

class RestaurantInfo extends React.Component {

  state = {
      name: '',
      description: '',
      price: '',
      cuisine: '',
      eatout: '',
      eatin: '',
      image: ''
    };

    getResto = () => {
      console.log('hello', this.props.match.params.id);
      id = this.props.match.params.id;
      axios.get(`https://team-hangry.herokuapp.com/restaurants/${id}.json`)
      .then( res =>{
        console.log('result:', res.data);
      this.setState({ name: res.data.name })
      this.setState({ description: res.data.description })
      this.setState({ price: res.data.price })
      this.setState({ cuisine: res.data.cuisine })
      this.setState({ eatout: res.data.eatout })
      this.setState({ eatin: res.data.eatin })
      this.setState({ image: res.data.image })
      })
      .catch( err => console.warn(err) )
    }

    componentDidMount(){
      this.getResto();
      console.log(this.props);
    }

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
      </div>
        );
    }

}

export default RestaurantInfo;
