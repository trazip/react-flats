import React, { Component } from 'react';

import flats from './flats';
import FlatsList from './flats_list';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedFlat: ''
    };
  }

  render() {
    return(
      <div>
        <FlatsList flats={flats} />
        <div className="map-container"></div>
      </div>
    );
  }
}

export default App;
