export const isRequired = (value) => {
    return !value ? "Required" : false
}

export const isEmail = async value => {
    if (!value) {
        return "Email is required";
      }
      if (!validateEmail(value)) {
        return "Please enter a valid email addresss";
      }
      console.log(`Checking email: ${value}...`);
      await new Promise(resolve => setTimeout(resolve, 2000));

      return value === "bill@gmail.com"
        ? "Email is already being used"
        : false;
    }

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }