import React from 'react';
import PropTypes from 'prop-types';
import '../css/User.css';

class User extends React.Component {

  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    index: PropTypes.string
  }

  render(){
    return(
      <div className={`card user-box user-${this.props.index}`}>
        <h3 className="user-text">{this.props.name}</h3>
      </div>
    )
  }

}

export default User;
