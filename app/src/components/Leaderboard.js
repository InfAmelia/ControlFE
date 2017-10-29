import React from 'react';
import PropTypes from 'prop-types';
import '../css/Leaderboard.css';

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

  callApi(){
    fetch("https://intense-atoll-95121.herokuapp.com/players")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ players: responseJson });
      })
      .catch((error) => {
        console.error(error);
      })
  }

  constructor(props){
    super(props);

    this.state = {
      players: []
    }
  }

  calculateRanking(player) {
    var winsArray = [];

    for (var i = 0; i < this.state.players.length; i++) {
      winsArray.push(this.state.players[i].wins)
    }

    return winsArray.indexOf(player.wins) + 1;
  };

  displayPlayerName(player){
    const challengeContent = player.challenge_ids.map((challengeId) =>
      <span key={"challengeIdContainer-" + challengeId + player.name} className={"challenge" + challengeId}>[{challengeId}]</span>
    );

    return(
      <div><p>{player.name} {challengeContent}</p></div>
    );
  }

  render(){
    this.callApi()

    const content =
        this.state.players.map((player, index) =>
          <div className="row Robo-Font grid-body" key={player.name + "-player" + index}>
            <div className="col-4 grid-element">
              {this.calculateRanking(player)}
            </div>
            <div className="col-4 grid-element">
              {this.displayPlayerName(player)}
            </div>
            <div className="col grid-element">
              {player.wins}
            </div>
          </div>
        )
      return (
      <div ref="leaderboard" className="leaderboard">
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
