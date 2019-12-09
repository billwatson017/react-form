import React from 'react';
import "../text/text.css";

 const InputText = React.forwardRef(({getInputProps, ...passThro}, ref) => {
  return (
    <>
      <input type="text" className="input-text" autocomplete="off" {...passThro} {...getInputProps({ ref })} />
    </>
  );
});

export default InputText;