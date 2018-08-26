import React from 'react';
import PropTypes from 'prop-types';
import '../css/User.css';

class User extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      selectedComponent: false,
      firstUser: false
    };
  }

  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    index: PropTypes.number,
    choreId: PropTypes.number
  }

  confirmationDialog(){
    return (<div className="row">
      <div onClick={() => {this.handleConfirmationClick()}} className="col-6 confirmation-text">
        Confirm
      </div>
      <div className="col-6 confirmation-text">
        Cancel
      </div>
    </div>);
  }

  displayText(){
    if(this.state.selectedComponent === true) {
      return this.confirmationDialog();
    } else {
      return <span className="user-text">{this.props.name}</span>
    }
  }

  handleConfirmationClick(){
    if (this.state.selectedComponent === true) {
      var userJson = JSON.stringify({ 'user_id': this.props.id, 'id': this.props.choreId });
      fetch(`https://fierce-shelf-51195.herokuapp.com/chores/${this.props.choreId}/rotate.json`, { method: 'post',
                                              headers: { "Content-Type": "application/json"},
                                              body: userJson })
    }
  }

  handleUserClick(){
    this.toggleState();
  }

  toggleState() {
    this.setState({ selectedComponent: !this.state.selectedComponent });
  }

  render(){
    return(
      <div onClick={() => {this.handleUserClick()}} className={`card user-box user-${this.props.index}`}>
        {this.displayText()}
      </div>
    )
  }

}

export default User;
