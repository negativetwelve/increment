// Libraries
import React from 'react';
import {Formik} from 'formik';
import _ from 'lodash';

const Form = ({children, ...props}) => (
  <Formik
    {...props}
    render={(renderProps) => {
      const {setFieldError, setErrors} = renderProps;

      return children({
        ...renderProps,
        setMutationErrors: (errors) => {
          // Clear existing errors from previous submissions.
          setErrors({});

          if (errors) {
            // This will override errors so the first one for a given field shows first.
            _.forEachRight(errors, error => setFieldError(_.camelCase(error.field), error.message));
          }
        },
      });
    }}
  />
);

// --------------------------------------------------
// Props
// --------------------------------------------------
Form.propTypes = {
};

Form.defaultProps = {
};

export default Form;
