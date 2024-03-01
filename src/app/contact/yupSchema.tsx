import * as yup from "yup";

export const Schema = yup.object().shape({
  contact: yup.string().min(8).required("phone required"),
});
