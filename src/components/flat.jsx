import React, {Component} from 'react';

class Flat extends Component {

  constructor(props){
    super(props);
  }
  
  handleClick = (event) => {
    event.preventDefault()
    this.props.selectFlat(this.props.index);
  }
  render() {
    const { name, imageUrl, price, priceCurrency, selected } = this.props;
    const style = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${ imageUrl }')`
    }

    return (
      <div className={ selected ? "card active" : "card" } style={style}>
        <div className="card-category">{price} {priceCurrency}</div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#" onMouseEnter={this.handleClick}></a>
      </div>
    );
  }
}

export default Flat;
