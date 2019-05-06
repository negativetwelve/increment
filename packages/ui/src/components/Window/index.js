// Libraries
import React from 'react';
import ReactDOM from 'react-dom';

class Window extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleClick, false);
  }

  handleClick = (event) => {
    if (!this.ref.current) {
      console.log('Missing ref to Window child. Make sure to set the `ref` prop on a React component.');
      return;
    }

    const node = ReactDOM.findDOMNode(this.ref.current);
    if (node.contains(event.target)) {
      // Click is inside, ignore.
      return;
    }

    this.props.onOutsideClick(event);
  };

  render() {
    return this.props.children({ref: this.ref});
  }
}

export default Window;
