import React from 'react';
import ReactDOM from 'react-dom';
import Planet from '../Planet';

it('component Planet renders without crashing', () => {
  const fakeData = {
    name: 'Lorem',
    population: 9000,
    climate: 'tropical',
    terrain: 'desert',
    films: []
  };
  const div = document.createElement('div');
  ReactDOM.render(<Planet data={ fakeData } />, div);
});
