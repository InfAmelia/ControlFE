import React, { Component } from 'react';

class About extends React.Component {



displayChallenges(){
  const challenges = ["1. Win without lying",
  "2. Challenge correctly three in a row",
  "3. Challenge twice in a row and be wrong",
  "4. Win without telling the truth",
  "5. Win without looking at your cards",
  "6. Win while claiming every single role at least once",
  "7. Knock out two players at once (Hint: Assassinate someone successfully which is challenged by another player)",
  "8. Successfully claim a role which is not in play (Hint: Tax when bureacrat is in play, etc)",
  "9. Win without taking your initial two coins",
  "10. Win with only income and coup"];

  return (challenges.map((challenge) =>
    <div className="row challenge-row text-left">
      <div className="col">
        {challenge}
      </div>
    </div>
  ))
}

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
          (not implemented yet) In Slack, @coupboard report win {"<Winners Initials>"}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Challenges</h3>
        </div>
      </div>
      <div className="challenge-container">
      {this.displayChallenges()}
      </div>
    </div>
  )
}

}

export default About;
