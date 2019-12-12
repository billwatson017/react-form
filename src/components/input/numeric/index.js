import React from 'react';
import "../numeric/numeric.css";

 const InputText = React.forwardRef((props, ref) => {
  const { getInputProps, passThru} = props;
  return (
    <>
      <input type="number" className="input-numeric" autoComplete="off" {...passThru} { ...getInputProps({ ref })} />
    </>
  );
});

export default InputText;