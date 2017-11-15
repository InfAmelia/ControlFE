import React from 'react';
import PropTypes from 'prop-types';
import '../css/About.css';


class About extends React.Component {
  static propTypes = {
    challenges: PropTypes.array
  }

  constructor(props){
    super(props);

    this.state = {
      challenges: []
    }
  }

  // TODO: fix this
  hintButton(challenge){
    if (challenge.hint !== "") {
      return (
      <button type="button" className="btn" data-toggle="tooltip" data-placement="right" title={challenge.hint}>
        ?
      </button>)
    }
  }

  callApi(){
    fetch("https://intense-atoll-95121.herokuapp.com/challenges")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ challenges: responseJson });
      })
      .catch((error) => {
        console.error(error);
      })
  }

  componentWillMount(){
    this.callApi();

    this.interval = setInterval(() => {
      this.callApi();
    }, 5000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  displayChallenges(){
    const content = (this.state.challenges.map((challenge) =>
      <div className="row challenge-row text-left" key={challenge.name + challenge.id}>
        <div className="col">
          {challenge.id}: {challenge.description} {this.hintButton(challenge)}
        </div>
      </div>
    ))

    return (<div className="challenge-container">
      <h4>Challenges</h4>
      {content}
      </div>)
  }

  displayInstructions(){
    return (
    <div className="instructions-container">
      <div className="grid-header">
        <h4>Instructions</h4>
      </div>
      <div className="grid-body">
        <div className="row">
          <div className="col-5 grid-element">
            Report a Win
          </div>
          <div className="col text-left grid-element">
            @coupbot report win {"<initials>"}
          </div>
        </div>
        <div className="row">
          <div className="col-5 grid-element">
            Report a challenge
          </div>
          <div className="col grid-element text-left">
            @coupbot report win {"<initials>"} {"<challenge id>"}
          </div>
        </div>
      </div>
    </div>)
  }

render(){
  return (
    <div className="About-grid">
      {this.displayInstructions()}
      {this.displayChallenges()}
      <div className="grid-footer"></div>
    </div>
  )
}

}

export default About;
