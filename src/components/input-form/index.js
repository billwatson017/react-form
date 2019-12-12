import React from 'react';
import { useForm } from "react-form";
import PropTypes from 'prop-types';

export const InputForm = (props) => {
      const { defaultValues, debugForm, validate, onSubmit} = props

      const {
        Form,
        meta: { isSubmitting, isSubmitted, canSubmit, error }
      } = useForm({ 
        defaultValues,
        validate: values => validate ? validate(values) : null,
        onSubmit: async (values, instance) => onSubmit ? onSubmit(values, instance) : null,
        debugForm: debugForm
      });

  return (
    <>
    <Form>
      <div style={{width: "500px", marginLeft: "auto", marginRight: "auto"}}>
        {props.children}

        {isSubmitted ? <em>Thanks for submitting!</em> : null}

        {error ? <strong>{error}</strong> : null}

        {isSubmitting ? (
          "Submitting..."
        ) : (
          <div>
            <button type="submit" disable={!canSubmit ? 1 : 0}>Submit</button>
          </div>
        )}
      </div>
    </Form>
    </>
  );
};

InputForm.defaultProps = {
  defaultValues: {},
  debugForm: false,
  validate: null,
  onSubmit: null
};

InputForm.propTypes = {
  defaultValues: PropTypes.object,
  debugForm: PropTypes.bool,
  validate: PropTypes.func,
  onSubmit: PropTypes.func
};

export default InputForm;
