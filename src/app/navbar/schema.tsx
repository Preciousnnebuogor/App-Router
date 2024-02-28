import * as yup from "yup";

export const Schema = yup.object().shape({
  firstname: yup.string().required("First name rquired"),
  middlename: yup.string().required("Middle name rquired"),
  surname: yup.string().required("Surname name rquired"),
});
