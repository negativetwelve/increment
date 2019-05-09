// Libraries
import React from 'react';

class Lifecycle extends React.Component {
  componentDidMount() {
    this.props.onMount && this.props.onMount();
  }

  render() {
    return this.props.children;
  }
}

export default Lifecycle;
