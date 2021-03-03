import React, { Component } from 'react';

import Flat from './flat';

const FlatsList = (props) => {
  return(
    <div className="flat-list">
      {props.flats.map(({ name, imageUrl, price, priceCurrency }) => {
      return <Flat name={name} imageUrl={imageUrl} price={price} priceCurrency={priceCurrency} key={name} />;
      })}
    </div>
  );
}

export default FlatsList;
