import React, { Component } from 'react';

class Planet extends Component {
  render() {
    return(
      <div id="planet">
        <h1 className="name">{this.props.data.name}</h1>
        <ul className="attributes">
          <li><strong>Population </strong> <span>{this.props.data.population}</span></li>
          <li><strong>Climate </strong><span>{this.props.data.climate}</span></li>
          <li><strong>Terrain </strong><span>{this.props.data.terrain}</span></li>
          <li><strong>Featured in </strong><span>{this.props.data.films.length} movies</span></li>
        </ul>
      </div>
    )
  }
}

export default Planet;
