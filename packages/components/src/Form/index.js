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
      const {setErrors} = renderProps;

      return children({
        ...renderProps,
        setMutationErrors: (serverErrors = []) => {
          // Clear existing errors from previous submissions.
          const errors = {};

          // This will override errors so that the first error for a given field
          // shows first.
          _.forEachRight(serverErrors, (serverError) => {
            _.set(errors, getFieldName(serverError), serverError.message);
          });

          // Update the errors object all in one go to trigger one re-render.
          setErrors(errors);
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
