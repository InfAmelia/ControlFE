import React from 'react';
import PropTypes from 'prop-types';

// this is unused, I might use it later #packrat
class ChallengesMet extends React.Component {
  static propTypes = {
    challengesMet: PropTypes.array
  }

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="challengesMet">
        { this.props.challengesMet.map((challenge) =>
          <div key={challenge + "-challenge"}>{challenge}</div>
        )}
      </div>
    );
  }
}

export default ChallengesMet;
