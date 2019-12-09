import React from 'react';
import { useField, splitFormProps } from "react-form";
import "../input-container/input-container.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

// input-container contains form layout, style and validation for app
export const InputContainer =  React.forwardRef((props, ref) => {
  const { Input, Icon, label, ...passThru } = props;

  // get form-specific props
  const [field, fieldOptions] = splitFormProps(props);

  // get field state
  const {
      meta: { error, isTouched, isValidating, message },
      getInputProps
    } = useField(field, fieldOptions);

  return (
    <>
      <div className="input-container">
        <div className="input-label">
          {label}
          <span className="required">*</span>
        </div>
        <div className="input-wrapper">
          {Icon ? 
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={Icon} />
            </div>
          : null}
          <div className="element-wrapper">
            <Input {...{ref, ...passThru, getInputProps}} />
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
});

InputContainer.defaultProps = {
  //default props 
}

export default InputContainer;
