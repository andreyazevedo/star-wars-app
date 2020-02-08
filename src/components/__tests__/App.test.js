import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it ('set state with planet data after finished API call', async () => {
  const wrapper = shallow( <App />, { disableLifecycleMethods: true } );

  const requirements = {
    name: expect.any( String ),
    population: expect.any( String ),
    climate: expect.any( String ),
    terrain: expect.any( String )
  };

  await wrapper.instance().getApiData()
  .then( () => {
    expect( wrapper.instance().state.planet )
    .toEqual( expect.objectContaining( requirements ) );
  } );

} );

it('haveGameRequirements() return false if name property is unknown', () => {
  const fakeData = {
    name: 'unknown',
    population: 9000,
    climate: 'sunny',
    terrain: 'desert',
    films: []
  };

  const wrapper = shallow( <App />, { disableLifecycleMethods: true } );
  expect( wrapper.instance().haveGameRequirements( fakeData ) ).toEqual( false );
});

it('haveGameRequirements() return false if name property is unknown', () => {
  const fakeData = {
    name: 'unknown',
    population: 9000,
    climate: 'sunny',
    terrain: 'desert',
    films: []
  };

  const wrapper = shallow( <App />, { disableLifecycleMethods: true } );
  expect( wrapper.instance().haveGameRequirements( fakeData ) ).toEqual( false );
});

it('haveGameRequirements() return false if climate property is unknown', () => {
  const fakeData = {
    name: 'earth',
    population: 9000,
    climate: 'unknown',
    terrain: 'desert',
    films: []
  };

  const wrapper = shallow( <App />, { disableLifecycleMethods: true } );
  expect( wrapper.instance().haveGameRequirements( fakeData ) ).toEqual( false );
});

it('haveGameRequirements() return false if terrain property is unknown', () => {
  const fakeData = {
    name: 'unknown',
    population: 9000,
    climate: 'sunny',
    terrain: 'unknown',
    films: []
  };

  const wrapper = shallow( <App />, { disableLifecycleMethods: true } );
  expect( wrapper.instance().haveGameRequirements( fakeData ) ).toEqual( false );
});
