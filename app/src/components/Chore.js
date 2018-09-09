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

  // on click, rotate chore
  render(){
    const content = this.props.users.map((user, index) =>
      <div key={user.id + "user"}>
        <User name={user.name} index={index} choreId={this.props.id} id={user.id} firstUser={index === 0}/>
      </div>
    )

    return(
      <div>
        <div className="user-content">{content}</div>
      </div>
    )
  }
}

export default Chore;
