import React, { Component } from 'react';

class About extends React.Component {

render(){
  return (
    <div className="About-grid">
      <h3>How to use:</h3>
      <div className="row">
        <div className="col">
          Play a game of coup as you normally would, and when complete, note the winner
        </div>
      </div>
      <div className="row">
        <div className="col">
          (not implemented yet) In Slack, @coupboard winner {"<Winners Initials>"}
        </div>
      </div>
    </div>
  )
}

}

export default About;
