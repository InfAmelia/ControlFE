import React from 'react';
import PropTypes from 'prop-types';
import Chore from './Chore.js'
import '../css/Choreboard.css';

class Choreboard extends React.Component {

  static propTypes = {
    choreStats: PropTypes.array
  }

  header(){
    return (
      <div className="row Robo-Font grid-header">
      </div>)
  }

  callApi(){
    fetch("http://localhost:5000/chores")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ chores: responseJson });
      })
      .catch((error) => {
        console.error(error);
      })
  }

  constructor(props){
    super(props);

    this.state = {
      chores: []
    }
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

  render(){
      let content = this.state.chores.map((chore) =>
        <div className="row" key={chore.id + "-chore"}>
          <div className="col grid-element">
            <Chore id={chore.id} name={chore.name} users={chore.users} assigned_to={chore.assigned_to} />
          </div>
          <hr />
        </div>
      )

      return (
      <div ref="choreboard" className="choreboard">
        <div className="choreboard-header">
          {content}
        </div>
        <div className="choreboard-body">

        </div>
        <div className="grid-footer">
        </div>
      </div>)
    }

}

export default Choreboard;
