import * as yup from "yup";

export const Schema = yup.object().shape({
  date: yup.string().required("First name rquired"),
});
