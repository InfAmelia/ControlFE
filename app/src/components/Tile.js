import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tile extends React.Component {
  static propTypes = {
    width: PropTypes.number,
    cardTitle: PropTypes.string,
    playerName: PropTypes.string
  }

  constructor(props){
    super(props);
  }

  render(){
    return ( //
      <div className="card" style={{ width: `${this.props.width}rem` }}>
        <img className="card-img-top" alt='Missing Image'></img>
        <div className="card-block">
          <h4 className="card-title">{this.props.cardTitle}</h4>
          <p className="card-text">{this.props.playerName}</p>
          <a className="btn btn-primary">Button!</a>
        </div>
      </div>
    )
  }
}

export default Tile;
