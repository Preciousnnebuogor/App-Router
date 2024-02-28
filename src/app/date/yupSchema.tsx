import * as yup from "yup";

export const Schema = yup.object().shape({
  date: yup
    .date()
    .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
    .required("Required"),
});
