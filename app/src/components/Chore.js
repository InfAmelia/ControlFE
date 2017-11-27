import React from 'react';
import PropTypes from 'prop-types';
import User from './User.js'
import '../css/Chore.css';

class Chore extends React.Component {

  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    users: PropTypes.array
  }

  // callApi(){
  //   fetch("http://localhost:5000/chores/" + this.props.id)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({ chores: responseJson });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     })
  // }

  // componentWillMount(){
  //   this.callApi();
  //
  //   this.interval = setInterval(() => {
  //     this.callApi();
  //   }, 5000);
  // }
  //
  // componentWillUnmount(){
  //   clearInterval(this.interval);
  // }

  // on click, rotate chore
  render(){
    const content = this.props.users.map((user, index) =>
      <div key={user.id + "user"}>
        <User name={user.name} index={index} choreId={this.props.id} id={user.id} />
      </div>
    )

    return(
      <div>
        <h1>{this.props.name}</h1>
        <div className="user-content">{content}</div>
      </div>
    )
  }
}

export default Chore;
