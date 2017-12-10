import React, { Component } from 'react';
import Planet from './Planet';
import * as Api from './api';
import './App.css';
import './loader.css';

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
      const planet_data = this.sanitizeData( data );

      if ( this.haveGameRequirements( planet_data ) ) {
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

  sanitizeData( data ) {
    // This function ensures that only the necessary values is passed
    // to state and prevents errors from missing properties of API response
    let planet = {
      name: 'unknown',
      population: 'unknown',
      climate: 'unknown',
      terrain: 'unknown',
      films: 0
    };

    for ( const [key] of Object.entries(planet) ) {
      if ( key === 'films' ) {
        if ( data.hasOwnProperty( key ) && Array.isArray( data[key] ) ) {
          planet[key] = data[key].length;
        }
      } else {
          if ( data.hasOwnProperty( key ) ) {
            planet[key] = data[key];
          }
      }
    }

    return planet;
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
    return(
      <div className="App">
        <div className="spinner">
          <div className="dot1"></div>
          <div className="dot2"></div>
        </div>
      </div>
    );

    return(
      <div className="App">
        <Planet data={ this.state.planet } />
        <button className="next-btn" onClick={ this.getNextPlanet }>Next</button>
      </div>
    );
  }
}

export default App;
