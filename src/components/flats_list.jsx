import React, { Component } from 'react';

import Flat from './flat';

const FlatsList = (props) => {
  return(
    <div className="flat-list">
      {props.flats.map((flat, index) => {
      return (
      <Flat
        index={index}
        key={flat.lat}
        name={flat.name}
        selected={flat.name === props.selectedFlat.name} 
        imageUrl={flat.imageUrl} 
        price={flat.price} 
        priceCurrency={flat.priceCurrency} 
        selectFlat={props.selectFlat}/>
      );
      })}
    </div>
  );
}

export default FlatsList;
