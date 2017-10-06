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

  matchesApiStub(){
    return [{ id: 1, date: "May 5th, 2017", winner: "Scott" },
            { id: 2, date: "May 4th, 2017", winner: "Bob" },
            { id: 3, date: "May 3rd, 2017", winner: "Mike" },
            { id: 4, date: "May 3rd, 2017", winner: "Bob" },
            { id: 5, date: "May 2nd, 2017", winner: "Ed" },
            { id: 6, date: "May 1st, 2017", winner: "Amy" }]
  }

  leaderboardApiStub(){
    // stubbed to return a parsed result from the API
    return [{ id: 1,  name: 'Scott',   wins: 76 },
            { id: 2,  name: 'Chad',    wins: 21 },
            { id: 3,  name: 'Mike',    wins: 17 },
            { id: 4,  name: 'Amber',   wins: 7  },
            { id: 5,  name: 'Bob',     wins: 6  },
            { id: 6,  name: 'Brendan', wins: 5  },
            { id: 7,  name: 'Jason',   wins: '4'},
            { id: 8,  name: 'Peter',   wins: 2  },
            { id: 9,  name: 'Ed',      wins: 2  },
            { id: 10, name: 'Amy',     wins: 1  }]
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
      <div className="col" key={componentName + "-nav"}>
        <div onClick={this.updateSelectedComponent(componentName)} className="Robo-Font">
          {this.wrapSelectedComponent(componentName)}
        </div>
      </div>
    )
  }

  // TODO - make this an array of components with a single map function creating them to dry up
  appBody(){
    return (<div className="App-body">
      <div className="App-grid leaderboard Robo-Font">
        <Leaderboard playerStats={this.leaderboardApiStub()} />
      </div>

      <br />
      <div className="App-grid matches Robo-Font">
        <Matches matchStats={this.matchesApiStub()}/>
      </div>

      <br />
      <div className="App-grid about Robo-Font">
        <About />
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
