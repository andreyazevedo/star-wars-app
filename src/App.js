import React, { Component } from 'react';
import Planet from './Planet';
import * as Api from './api';
import './App.css';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = { planet: [] };

    this.getNextPlanet = this.getNextPlanet.bind(this);
  }

  componentDidMount() {
    this.getApiData();
  }

  getApiData() {
    // This function calls the Swapi API to get a random planet data. With a sucessful
    // response the data is passed to 'haveGameRequirements()'.
    // If its returns true then the state is updated.
    return Api.getRandomPlanet()
    .then( data => {
      if ( this.haveGameRequirements( data ) ) {
        this.setState( { planet: data } );
      } else {
        console.info( 'This planet have no suficient information. Getting another...' );
        this.getApiData();
      }
    } )
    .catch((error) => {
      console.error(error);
    });
  }

  haveGameRequirements( data ) {
    // Check if the 3 parameters from game requirements (Name, Climate, Terrain)
    // are returned by API with a real value
    const parameters = [ data.name, data.climate, data.terrain ];

    return parameters.every( ( item ) => {
      return item !== 'unknown';
    } );
  }

  getNextPlanet() {
    this.setState( { planet: [] } );
    this.getApiData();
  }

  render() {
    if ( this.state.planet.length === 0 )
      return null;

    return(
      <div className="App">
        <Planet data={ this.state.planet } />
        <button className="next-btn" onClick={ this.getNextPlanet }>Next</button>
      </div>
    );
  }
}

export default App;
