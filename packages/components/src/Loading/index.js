// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// --------------------------------------------------
// Components
// --------------------------------------------------
class Loading extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !nextProps.loading || nextProps.alwaysUpdate;
  }

  render() {
    const {loading, as: Component, children, ...props} = this.props;

    if (!loading) {
      return children();
    } else if (!Component) {
      return null;
    } else if (React.isValidElement(Component)) {
      return Component;
    }

    return <Component {...props} />;
  }
}

// --------------------------------------------------
// Props
// --------------------------------------------------
Loading.propTypes = {
  children: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  alwaysUpdate: PropTypes.bool,
  as: PropTypes.any,
};

Loading.defaultProps = {
  loading: true,
  alwaysUpdate: false,
  as: null,
};

export default Loading;
