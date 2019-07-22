// Libraries
import React from 'react';

class Lifecycle extends React.Component {
  componentDidMount() {
    this.props.onMount && this.props.onMount();
  }

  componentDidUpdate() {
    this.props.onUpdate && this.props.onUpdate();  
  }
  
  render() {
    return this.props.children;
  }
}

export default Lifecycle;
