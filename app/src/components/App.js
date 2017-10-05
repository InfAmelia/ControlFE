import React, { Component } from 'react';
import logo from './logo.svg';
import '../bootstrap.css';
import '../App.css';
import Tile from './Tile.js'
import Matches from './Matches.js'
import Leaderboard from './Leaderboard.js'
import About from './About.js'

class App extends Component {
  // props = properties of the component
  // life cycle is important, should look up how that works
  // constructor(props){
  //   super(props);
  //
  //   // could be props instead
  //   this.state = {
  //     players: {}
  //   };
  // }

  playersApiStub(){
    return [{ id: 1, name: "Scott", }]
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

  // this will only be called once
  // componentWillMount() {
  //   const results = this.leaderboardApiStub(); // this will eventually be a promise, which is why we use state
  //   this.setState({ players: results });
  // }

  // displayLeaderboard(){
  //   const gridHeader = this.displayLeaderboardHeader();
  //   const gridContent =
  //     this.state.players.map((player) =>
  //       <div className="row Robo-Font grid-body" key={player.id + "-player"}>
  //         <div className="col-1 grid-element">
  //           {player.id}
  //         </div>
  //         <div className="col-6 grid-element">
  //           {player.name}
  //         </div>
  //         <div className="col grid-element">
  //           {player.wins}
  //         </div>
  //       </div>
  //     );
  //
  //   return <div className="leaderboard-grid">{gridHeader}{gridContent}</div>
  // }

  // eventually, make it so that this is done on click and the symbols are used to denote selection along with sizing }
  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="row">
            <div className="col">
              <div className="Robo-Font">Matches</div>
            </div>
            <div className="col selected">
              <div className='Robo-Font'>{"<<"} Leaderboard {">>"}</div>
            </div>
            <div className="col">
              <div className='Robo-Font'>About</div>
            </div>
          </div>
        </div>
        <div className="App-body">
          <div className="App-grid leaderboard">
            <Leaderboard playerStats={this.leaderboardApiStub()} />
          </div>
          <br />
          <div className="App-grid matches">
            <Matches matchStats={this.matchesApiStub()}/>
          </div>
          <div className="App-grid about">
            <About />
          </div>
          <div className="App-bar row">
            <div className="col-md-6">
              <Tile width={15} cardTitle="Most Wins" playerName="Bob"/>
            </div>
            <div className="col-md-6">
              <Tile width={15} cardTitle="Highest Win %" playerName="Scott"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
