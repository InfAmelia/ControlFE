import React, { Component } from 'react';
import logo from './logo.svg';
import '../bootstrap.css';
import '../css/App.css';
import Matches from './Matches.js'
import Leaderboard from './Leaderboard.js'
import About from './About.js'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedComponent: 'Leaderboard'
    };
  }

  updateSelectedComponent(component){
    this.setState({ selectedComponent: component})
  }

  renderLeaderboardIfSelected(){
    if(this.state.selectedComponent === "Leaderboard") {
      return (
        <div className="App-grid leaderboard Robo-Font rounded">
          <Leaderboard />
        </div>)
    }
  }

  renderAboutIfSelected(){
    if(this.state.selectedComponent === "About") {
      return (
        <div className="App-grid about Robo-Font rounded">
          <About />
        </div>)
    }
  }

  renderMatchesIfSelected(){
    if(this.state.selectedComponent === "Matches") {
      return (
        <div className="App-grid matches Robo-Font rounded">
          <Matches />
        </div>)
    }
  }

  aboutApiStub(){
    return [{ id: 1, description: "Win without lying", hint: ''},
            { id: 2, description: "Win without taking your initial two coins", hint: ''},
            { id: 3, description: "Challenge twice in a row and be wrong", hint: ''},
            { id: 4, description: "Win without telling the truth", hint: ''},
            { id: 5, description: "Win without looking at your cards", hint: ''},
            { id: 6, description: "Win while claiming every single role at least once", hint: ''},
            { id: 7, description: "Knock out two players at once", hint: "Assassinate someone successfully which is challenged by another player"},
            { id: 8, description: "Successfully claim a role which is not in play", hint: "Tax when bureacrat is in play, etc)"},
            { id: 9, description: "Challenge correctly three in a row", hint: ''},
            { id: 10, description: "Win with only income and coup", hint: ''}]
  }

  wrapSelectedComponent(component){
    if (this.state.selectedComponent === component) {
      return <div className="selected">{"<< " + component + " >>"}</div>
    } else {
      return <div>{component}</div>
    }
  }

  // eventually, make it so that this is done on click and the symbols are used to denote selection along with sizing }
  appHeader(){
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="row">
          {this.navBar()}
        </div>
      </div>
    )
  }

  navBar(){
    return ["Matches", "Leaderboard", "About"].map((componentName) =>
      <div className="col" key={componentName}>
        <div onClick={() => {this.updateSelectedComponent(componentName)}} className="Robo-Font App-navigation">
          {this.wrapSelectedComponent(componentName)}
        </div>
      </div>
    )
  }

  // TODO - make this an array of components with a single map function creating them to dry up
  appBody(){
    return (<div className="App-body">
      { this.renderLeaderboardIfSelected() }
      { this.renderAboutIfSelected() }
      { this.renderMatchesIfSelected() }
    </div>)
  }

  render() {
    return (
      <div className="App container">
          { this.appHeader() }
          { this.appBody() }
      </div>
    );
  }
}

export default App;
