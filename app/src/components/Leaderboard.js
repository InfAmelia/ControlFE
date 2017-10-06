import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Leaderboard extends React.Component {

  static propTypes = {
    playerStats: PropTypes.array
  }

  header(){
    return (
      <div className="row Robo-Font grid-header">
        <div className="col-1">
          RANK
        </div>
        <div className="col-6">
          NAME
        </div>
        <div className="col">
          SCORE
        </div>
      </div>)
  }

  constructor(props){
    super(props);
  }

  render(){
    const content =
        this.props.playerStats.map((player) =>
          <div className="row Robo-Font grid-body" key={player.id + "-player"}>
            <div className="col-1 grid-element">
              {player.id}
            </div>
            <div className="col-6 grid-element">
              {player.name}
            </div>
            <div className="col grid-element">
              {player.wins}
            </div>
          </div>
        )
      return (
      <div className="something">
        <div className="header">
          {this.header()}
        </div>
        <div className="body">
          {content}
        </div>
      </div>)
    }

}

export default Leaderboard;
