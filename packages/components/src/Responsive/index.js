// Libraries
import React from 'react';
import {useMediaQuery} from 'react-responsive';

const defaults = {
  desktop: false,
  tablet: false,
  mobile: false,
};

const Responsive = ({children}) => {
  const isLargeDesktop = useMediaQuery({minWidth: 1200});
  const isDesktop = useMediaQuery({minWidth: 992});
  const isTablet = useMediaQuery({minWidth: 768});

  if (isLargeDesktop) {
    return children({...defaults, desktop: true, large: true});
  } else if (isDesktop) {
    return children({...defaults, desktop: true});
  } else if (isTablet) {
    return children({...defaults, tablet: true});
  } else {
    // Anything smaller is mobile.
    return children({...defaults, mobile: true});
  }
};

export default Responsive;
