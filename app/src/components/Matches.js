import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Matches extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      matches: []
    }
  }

  header(){
    return (
      <div className="row Robo-Font grid-header">
        <h4 className="col-5">
          DATE
        </h4>
        <h4 className="col-6">
          WINNER
        </h4>
        <h4 className="col-1">
        </h4>
      </div>)
  }

  callApi(){
    var myHeaders = new Headers({'Access-Control-Allow-Origin':'*', 'Content-Type': 'multipart/form-data'});

    var myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'no-cors',
                   cache: 'default' };

    return fetch('https://intense-atoll-95121.herokuapp.com/matches', myInit)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({matches: responseJson});
      })
      .catch((error) => {
        console.error(error);
      })
  }

  render(){
    this.callApi()

    const content =
      this.state.matches.map((match) =>
        <div className="row Robo-Font grid-body" key={match.id + "-match"}>
          <div className="col-5 grid-element">
            {match.created_at}
          </div>
          <div className="col-6 grid-element">
            {match.winner}
          </div>
          <div className="col-1 grid-element">

          </div>
        </div>
      )

    return (
      <div className="matches-container">
        <div className="matches-header">
          {this.header()}
        </div>
        <div className="matches-body">
          {content}
        </div>
        <div className="grid-footer">
        </div>
      </div>
    )
  }

}

export default Matches;
