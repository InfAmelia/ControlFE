import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Matches extends React.Component {

  static propTypes = {
    matchStats: PropTypes.string
  }

  constructor(props){
    super(props);
  }

  header(){
    return (
      <div className="row Robo-Font grid-header">
        <div className="col-1">
          ID
        </div>
        <div className="col-6">
          DATE
        </div>
        <div className="col">
          WINNER
        </div>
      </div>)
  }

  render(){
    const content =
      this.props.matchStats.map((match) =>
        <div className="row Robo-Font grid-body" key={match.id + "-match"}>
          <div className="col-1 grid-element">
            {match.id}
          </div>
          <div className="col-6 grid-element">
            {match.date}
          </div>
          <div className="col grid-element">
            {match.winner}
          </div>
        </div>
      )

    return (
      <div className="something">
      <h4>this is matches</h4>
        <div className="header">
          {this.header()}
        </div>
        <div className="body">
          {content}
        </div>
      </div>
    )
  }

}

export default Matches;
