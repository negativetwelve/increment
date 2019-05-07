// Libraries
import React from 'react';
import PropTypes from 'prop-types';

class Analytics extends React.Component {
  constructor(props) {
    super(props);
    this.analytics = {
      identify: this.handleIdentify,
      track: this.handleTrack,
    };
  }

  get services() {
    return {
      amplitude: window.amplitude,
      mixpanel: this.context.mixpanel,
    };
  }

  handleIdentify = ({id, firstName, lastName, email, ...rest}) => {
    const {amplitude, mixpanel} = this.services;
    const payload = {ID: id, ...rest};

    // Universal logging
    // console.log(`Identify: ${id}`);

    if (amplitude) {
      amplitude.setUserId(id);
      amplitude.setUserProperties({
        ...payload,
        'First Name': firstName,
        'Last Name': lastName,
        'Email': email,
      });
    }

    if (mixpanel) {
      mixpanel.identify(id);
      mixpanel.people.set({
        ...payload,
        '$first_name': firstName,
        '$last_name': lastName,
        '$email': email,
      });
    }
  };

  handleTrack = ({event, type, payload}) => {
    const {amplitude, mixpanel} = this.services;
    const data = {...payload, 'Type': type, 'URL': window.location.pathname};

    // Universal logging
    // console.log(`Track: ${event}`);

    if (amplitude) {
      amplitude.logEvent(event, data);
    }

    if (mixpanel) {
      mixpanel.track(event, data);
    }
  };

  render() {
    return this.props.children({analytics: this.analytics});
  }
}

Analytics.contextTypes = {
  mixpanel: PropTypes.object,
};

export default Analytics;
