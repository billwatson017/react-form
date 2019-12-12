import React from "react";
import ReactDOM from "react-dom";
import InputForm from "./components/input-form";
import InputContainer from "./components/input-container";
import InputText from "./components/input/text";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// object used to populate the default values for the entire form
const defaultValues = {
  first_name: "bill"
}

// function used to validate multiple fields at the same time
const validate = (values) => {
  if (values.first_name === "john") {
    return "change default value";
  }
  return false;
}

// function used to hand form submit event
const onSubmit  = async (values, instance) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
}

// field validation
const fieldValidation= (value) => {
  return value.length < 10 ? "name needs to be greater than 12 characters" : false
}

function App() {
  return (
    <>
    <InputForm debugForm={true} onSubmit={onSubmit} validate={validate} defaultValues={defaultValues} >
      <InputContainer field="first_name" label="Given Name" Input={InputText} required validate={fieldValidation}/>
      <br />
      <br />
      <InputContainer field="last_name" label="Family Name" Input={InputText} defaultValue="watson" required />
      <br />
      <br />
      <InputContainer field="email_address" label="Email" Input={InputText} Icon={faEnvelope} />
    </InputForm>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
