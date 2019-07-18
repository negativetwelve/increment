// Libraries
import React from 'react';
import {Formik} from 'formik';
import _ from 'lodash';

const getFieldName = ({field}) => {
  const parts = field.split('.');
  const camelCaseParts = parts.map((part) => _.camelCase(part));

  return camelCaseParts.join('.');
};

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
            _.forEachRight(errors, error => setFieldError(getFieldName(error), error.message));
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
