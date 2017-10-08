import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Leaderboard extends React.Component {

  static propTypes = {
    playerStats: PropTypes.array
  }

  header(){
    return (
      <div className="row Robo-Font grid-header">
        <h4 className="col-4">
          RANK
        </h4>
        <h4 className="col-4">
          NAME
        </h4>
        <h4 className="col">
          SCORE
        </h4>
      </div>)
  }

  constructor(props){
    super(props);
  }

  render(){
    const content =
        this.props.playerStats.map((player) =>
          <div className="row Robo-Font grid-body" key={player.id + "-player"}>
            <div className="col-4 grid-element">
              {player.rank}
            </div>
            <div className="col-4 grid-element">
              {player.name}
            </div>
            <div className="col grid-element">
              {player.wins}
            </div>
          </div>
        )
      return (
      <div className="something">
        <div className="leaderboard-header">
          {this.header()}
        </div>
        <div className="leaderboard-body">
          {content}
        </div>
        <div className="grid-footer">
        </div>
      </div>)
    }

}

export default Leaderboard;
