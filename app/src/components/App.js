import React, { Component } from 'react';
import logo from './logo.svg';
import '../css/bootstrap.css';
import '../css/App.css';
import Choreboard from './Choreboard.js'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedComponent: 'Trash'
    };
  }

  updateSelectedComponent(component){
    this.setState({ selectedComponent: component})
  }

  renderChoreboardIfSelected(){
    if(this.state.selectedComponent === "Trash") {
      return (
        <div className="App-grid leaderboard Robo-Font rounded">
          <Choreboard />
        </div>)
    } else {
      return (
        <div className="App-grid leaderboard Robo-Font rounded">
          COMING SOON
        </div>
      )
    }
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
    return ["Floors", "Trash + Recycle", "Fridge"].map((componentName) =>
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
      { this.renderChoreboardIfSelected() }
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
