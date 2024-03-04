import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const Schema = yup.object().shape({
  contact: yup
    .string()
    .min(8)
    .max(12)
    .required("phone required")
    .matches(phoneRegExp, "Phone number is not valid"),
});
