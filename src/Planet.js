import React, { Component } from 'react';

class Planet extends Component {
  render() {
    return(
      <div id="planet">
        <h1 className="name">{this.props.data.name}</h1>
        <ul className="attributes">
          <li><strong>Population: </strong>{this.props.data.population}</li>
          <li><strong>Climate: </strong>{this.props.data.climate}</li>
          <li><strong>Terrain: </strong>{this.props.data.terrain}</li>
          <li><strong>Featured in </strong>{this.props.data.films.length} movies</li>
        </ul>
      </div>
    )
  }
}

export default Planet;
