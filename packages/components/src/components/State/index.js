// Libraries
import React from 'react';
import PropTypes from 'prop-types';

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.initial;
    this.setState = this.setState.bind(this);
  }

  render() {
    return this.props.children({
      ...this.state,
      setState: this.setState,
    });
  }
}

State.propTypes = {
  initial: PropTypes.object,
};

State.defaultProps = {
  initial: {},
};

export default State;
