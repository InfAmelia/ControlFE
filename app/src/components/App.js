import React, { Component } from 'react';
import logo from './logo.svg';
import '../bootstrap.css';
import '../App.css';
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
    console.log("This isn't working, welp")
  }

  aboutApiStub(){
    return [{ id: 1, description: "Win without lying", hint: ''},
            { id: 2, description: "Challenge correctly three in a row", hint: ''},
            { id: 3, description: "Challenge twice in a row and be wrong", hint: ''},
            { id: 4, description: "Win without telling the truth", hint: ''},
            { id: 5, description: "Win without looking at your cards", hint: ''},
            { id: 6, description: "Win while claiming every single role at least once", hint: ''},
            { id: 7, description: "Knock out two players at once", hint: "Assassinate someone successfully which is challenged by another player"},
            { id: 8, description: "Successfully claim a role which is not in play", hint: "Tax when bureacrat is in play, etc)"},
            { id: 9, description: "Win without taking your initial two coins", hint: ''},
            { id: 10, description: "Win with only income and coup", hint: ''}]
  }

  matchesApiStub(){
    return [{ id: 6, date: "May 5th, 2017", winner: "Scott" },
            { id: 5, date: "May 4th, 2017", winner: "Bob" },
            { id: 4, date: "May 3rd, 2017", winner: "Mike" },
            { id: 3, date: "May 3rd, 2017", winner: "Bob" },
            { id: 2, date: "May 2nd, 2017", winner: "Ed" },
            { id: 1, date: "May 1st, 2017", winner: "Amy" }]
  }

  leaderboardApiStub(){
    // stubbed to return a parsed result from the API
    // Rank will probably not exist in DB. Should index wins and sort desc, assume rank from that. Rank would potentially require LOTS of updates
    return [{ id: 1,  name: 'Scott',   wins: 76, rank: 1},
            { id: 2,  name: 'Chad',    wins: 21, rank: 2},
            { id: 3,  name: 'Mike',    wins: 17, rank: 3 },
            { id: 4,  name: 'Amber',   wins: 7,  rank: 4 },
            { id: 5,  name: 'Bob',     wins: 6,  rank: 5},
            { id: 6,  name: 'Brendan', wins: 5,  rank: 6},
            { id: 7,  name: 'Jason',   wins: '4',rank: 7},
            { id: 8,  name: 'Peter',   wins: 2,  rank: 8},
            { id: 9,  name: 'Ed',      wins: 2,  rank: 9},
            { id: 10, name: 'Amy',     wins: 1,  rank: 10}]
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
      <div className="col" >
        <div onClick={this.updateSelectedComponent(componentName)} className="Robo-Font">
          {this.wrapSelectedComponent(componentName)}
        </div>
      </div>
    )
  }

  // TODO - make this an array of components with a single map function creating them to dry up
  appBody(){
    return (<div className="App-body">
      <div className="App-grid leaderboard Robo-Font rounded">
        <Leaderboard playerStats={this.leaderboardApiStub()} />
      </div>

      <br />
      <div className="App-grid matches Robo-Font rounded">
        <Matches matchStats={this.matchesApiStub()}/>
      </div>

      <br />
      <div className="App-grid about Robo-Font rounded">
        <About challenges={this.aboutApiStub()}/>
      </div>
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
