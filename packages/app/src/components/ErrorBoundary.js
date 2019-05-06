// Libraries
import React from 'react';
import {colors} from '@akiolabs/ui/styles';
import {Styled} from '@akiolabs/ui/components';

const Container = Styled.View.extend`
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Message = Styled.H6.extend`
  color: ${colors.gray8};
  text-align: center;
`;

class ErrorBoundary extends React.Component {
  state = {
    error: null,
  };

  componentDidCatch(error, extra) {
    this.setState({error});

    if (typeof Raven !== 'undefined') {
      // Send error to sentry. Note that the extra param must be named `extra`.
      Raven.captureException(error, {extra}); // eslint-disable-line
    }
  }

  render() {
    const {children} = this.props;
    const {error} = this.state;

    if (error) {
      return (
        <Container>
          <Message>
            {(
              `An unknown error has occurred and we have been notified.\n` +
              `Please contact us on Slack and include the url.`
            )}
          </Message>
        </Container>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
