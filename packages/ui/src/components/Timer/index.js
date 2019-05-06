// Libraries
import React from 'react';

class Timer extends React.Component {
  state = {
    timer: null,
    counter: 0,
  };

  componentDidMount() {
    this.check(this.props);
  }

  componentDidUpdate() {
    this.check(this.props);
  }

  componentWillUnmount() {
    this.stop();
  }

  check = ({loading}) => {
    if (loading && !this.state.timer) {
      this.start();
    }

    if (!loading && this.state.timer) {
      this.stop();
    }
  };

  start = () => {
    this.setState({timer: setInterval(this.tick, 10), counter: 0});
  };

  stop = () => {
    clearInterval(this.state.timer);
    this.setState({timer: null});
  };

  tick = () => {
    this.setState({counter: this.state.counter + 10});
  };

  render() {
    return this.props.children({counter: this.state.counter});
  }
}

export default Timer;
