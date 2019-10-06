// Libraries
import React from 'react';

class Lifecycle extends React.Component {
  componentDidMount() {
    this.props.onMount && this.props.onMount();
  }

  componentDidUpdate(previousProps) {
    this.props.onUpdate && this.props.onUpdate(previousProps);
  }

  render() {
    return this.props.children || null;
  }
}

export default Lifecycle;
