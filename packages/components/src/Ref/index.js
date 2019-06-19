// Libraries
import React from 'react';

const Ref = ({children}) => {
  const ref = React.createRef();

  return children(ref);
};

export default Ref;
