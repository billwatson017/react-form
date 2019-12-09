import React from "react";
import ReactDOM from "react-dom";
import InputContainer from "../src/components/input-container";
import InputText from "../src/components/input/text";
import { useForm } from "react-form";
import { isRequired, isEmail } from "../src/libs/validation";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
  // set default values
  const defaultValues = React.useMemo(
    () => ({
      first_name: "",
      last_name: "",
      email_address: ""
    }),
    []
  );
  const {
    Form,
    meta: { isSubmitting, isSubmitted, canSubmit, error }
  } = useForm({
    defaultValues,
    validate: values => {
      // validate any combinations of field values here
    },
    onSubmit: async (values, instance) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
    },
    debugForm: true
  });

  return (
    <Form>
      <div style={{width: "500px", marginLeft: "auto", marginRight: "auto"}}>
      <InputContainer field="first_name" label="Given Name" Input={InputText} validate={isRequired} />
      <br />
      <br />
      <InputContainer field="last_name" label="Family Name" Input={InputText} validate={isRequired} />
      <br />
      <br />
      <InputContainer field="email_address" label="Email" Input={InputText} Icon={faEnvelope} validate={isEmail} />

      {isSubmitted ? <em>Thanks for submitting!</em> : null}

      {error ? <strong>{error}</strong> : null}

      {isSubmitting ? (
        "Submitting..."
      ) : (
        <div>
          <button type="submit" disable={!canSubmit}>Submit</button>
        </div>
      )}
      </div>
    </Form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
