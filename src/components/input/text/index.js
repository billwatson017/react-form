import React from 'react';
import "../text/text.css";

 const InputText = (props) => {
  const { getInputProps, rest} = props;
  return (
    <>
      <input type="text" className="input-text" autoComplete="off" {...getInputProps(rest)} />
    </>
  );
};

export default InputText;