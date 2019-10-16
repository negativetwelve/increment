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
  const isDesktop = useMediaQuery({minWidth: 992, maxWidth: 1199});
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 991});
  const isMobile = useMediaQuery({maxWidth: 767});

  if (isLargeDesktop) {
    return children({...defaults, desktop: true, large: true});
  } else if (isDesktop) {
    return children({...defaults, desktop: true});
  } else if (isTablet) {
    return children({...defaults, tablet: true});
  } else if (isMobile) {
    return children({...defaults, mobile: true});
  } else {
    console.error('<Responsive> component did not satisfy any conditions. Rendering defaults.');
    return children({...defaults});
  }
};

export default Responsive;
