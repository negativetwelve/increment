// Libraries
import React from 'react';
import MediaQuery from 'react-responsive';

const defaults = {
  desktop: false,
  tablet: false,
  mobile: false,
};

const LargeDesktop = (props) => <MediaQuery {...props} minWidth={1200} />;
const Desktop = (props) => <MediaQuery {...props} minWidth={992} maxWidth={1199} />;
const Tablet = (props) => <MediaQuery {...props} minWidth={768} maxWidth={991} />;
const Mobile = (props) => <MediaQuery {...props} maxWidth={767} />;

const Responsive = ({children, ...props}) => (
  <React.Fragment>
    <LargeDesktop>
      {(matches) => matches ? children({...defaults, desktop: true, large: true}) : null}
    </LargeDesktop>
    <Desktop>
      {(matches) => matches ? children({...defaults, desktop: true}) : null}
    </Desktop>
    <Tablet>
      {(matches) => matches ? children({...defaults, tablet: true}) : null}
    </Tablet>
    <Mobile>
      {(matches) => matches ? children({...defaults, mobile: true}) : null}
    </Mobile>
  </React.Fragment>
);

export default Responsive;
