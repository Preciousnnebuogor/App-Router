import * as yup from "yup";

export const Schema = yup.object().shape({
  gender: yup.string().required("A radio option is required")
});
