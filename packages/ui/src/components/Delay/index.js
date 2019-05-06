// Libraries
import React from 'react';

class Delay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waiting: true,
    };
  }

  componentDidMount() {
    this.mounted = true;
    setTimeout(() => this.mounted && this.setState({waiting: false}), this.props.time);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return this.props.children({waiting: this.state.waiting});
  }
}

export default Delay;
