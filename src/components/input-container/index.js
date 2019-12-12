import React from 'react';
import PropTypes from 'prop-types';
import { useField, splitFormProps } from "react-form";
import "../input-container/input-container.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

// input-container contains form layout, style and validation for app
export const InputContainer = (props) => {
  const {Input, required, Icon, ...passThru} = props

  let validate = props.validate;
  if (required) {
    validate = value => {
      if (!value) {
        return "Required";
      }
      if (props.validate) {
        return props.validate(value);
      }
      return false;
    };
  }

  // get form-specific props
  const [field, fieldOptions, rest] = splitFormProps({...passThru, validate});

  // get field state
  const {
      meta: { error, isTouched, isValidating, message },
      getInputProps
    } = useField(field, fieldOptions);

  return (
    <>
      <div className="input-container">
        <div className="input-label">
          {props.label}
          <span className="required">*</span>
        </div>
        <div className="input-wrapper">
          {Icon ? 
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={Icon} />
            </div>
          : null}
          <div className="element-wrapper">
            <Input {...{getInputProps, rest}} />
          </div>
          {error ? 
            <div className="icon-wrapper error">
              <FontAwesomeIcon icon={faExclamation} />
            </div>
          : null}
        </div>
      </div>
      <div className="sub-text">
        {isValidating ? (
              "...validating"
          ) : isTouched && error ? (
            <span className="error">{error}</span>
          ) : message ? (
            <span className="message">{message}</span>
          ) : null}
      </div>
    </>
  );
};

InputContainer.defaultProps = {
  field: '',
  label: '',
  defaultValue: '',
  required: false
};

InputContainer.propTypes = {
  field: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  required: PropTypes.bool
};

export default InputContainer;
