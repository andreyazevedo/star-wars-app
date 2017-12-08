import React, { Component } from 'react';
import Planet from './Planet';
import * as Api from './api';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = { planet: [] };
  }

  componentDidMount() {
    this.getApiData();
  }

  getApiData() {
    Api.getRandomPlanet()
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

  render() {
    if ( this.state.planet.length === 0 )
      return null;
      
    return(
      <div className="App">
        <Planet data={ this.state.planet } />
      </div>
    );
  }
}

export default App;
