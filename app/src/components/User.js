import React from 'react';
import PropTypes from 'prop-types';
import '../css/User.css';

class User extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      selectedComponent: false
    };
  }

  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    index: PropTypes.number,
    choreId: PropTypes.number
  }

  displayText(){
    if(this.state.selectedComponent === true) {
      return <span className="user-text">Are you sure?</span>
    } else {
      return <span className="user-text">{this.props.name}</span>
    }
  }

  handleClick(){
    if (this.state.selectedComponent === true) {
      var userJson = JSON.stringify({ 'user_id': this.props.id, 'id': this.props.choreId });
      fetch(`https://choreapi.herokuapp.com/chores/${this.props.choreId}/rotate.json`, { method: 'post',
                                              headers: { "Content-Type": "application/json"},
                                              body: userJson })
    }

    this.toggleState();
  }

  toggleState(){
    if(this.state.selectedComponent === true) {
      this.setState({selectedComponent: false})
    } else {
      this.setState({selectedComponent: true})
    }
  }

  render(){
    return(
      <div onClick={() => {this.handleClick()}} className={`card user-box user-${this.props.index}`}>
        {this.displayText()}
      </div>
    )
  }

}

export default User;
