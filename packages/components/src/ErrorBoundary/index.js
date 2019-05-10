// Libraries
import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    error: null,
  };

  componentDidCatch(error, extra) {
    this.setState({error}, () => {
      this.props.onError && this.props.onError(error);
    });
  }

  render() {
    const {children, renderError} = this.props;
    const {error} = this.state;

    if (error && renderError) {
      return renderError({error});
    }

    return children;
  }
}

export default ErrorBoundary;
